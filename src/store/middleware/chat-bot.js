import { ApiAiClient } from "api-ai-javascript"
import to from "await-to-js"
import * as constants from "../actions/constants"
import { msgChatMessageSuccess, msgChatMessageError } from "../actions/chatBot"
import randomBool from "random-bool"
import { addResponseMessage } from 'react-chat-widget'
import store from '../store'

const client = new ApiAiClient({
  accessToken: "78236799780a479eae176aff8e5760c5"
})

const asyncSendMessage = async text => {
  const [err, response] = await to(client.textRequest(text))
  const { result: { fulfillment: { speech } } } = response
  addResponseMessage(speech)
  const synth = window.speechSynthesis
  let speechUtterance = new SpeechSynthesisUtterance(speech)
  speechUtterance.rate = store.getState().speech.speechDefaultSettings.rate
  speechUtterance.pitch = store.getState().speech.speechDefaultSettings.volume
  speechUtterance.volume = store.getState().speech.speechDefaultSettings.pitch
  speechUtterance.voice = speechSynthesis.getVoices()[0]
  synth.speak(speechUtterance)

  return [err, speech]
}

export default ({ getState, dispatch }) => next => action => {
  next(action)
  if (action.type === constants.CHAT_MESSAGE_REQUEST) {
    const { text } = action.payload.message;
    ( async () => {
      console.log("async will asyncSendMessage")
      let [err, speech] = await asyncSendMessage(text)
      console.log("finish asyncSendMessage")
      err = randomBool({ likelihood: 10 }) ? new Error("Error, bro!") : null
      console.log("Error Check : ", err)
      next(err ? msgChatMessageError(err) : msgChatMessageSuccess(speech))
      // dispatch(err ? msgChatMessageError(err) : msgChatMessageSuccess(speech))
    })()
  }
  // next(action)
}
