import { ApiAiClient } from "api-ai-javascript"
import to from "await-to-js"
import * as constants from "../actions/constants"
import { msgChatMessageSuccess, msgChatMessageError } from "../actions/chatBot"
import randomBool from "random-bool"
import { addResponseMessage } from 'react-chat-widget'

const client = new ApiAiClient({
  accessToken: "78236799780a479eae176aff8e5760c5"
})

const asyncSendMessage = async text => {
  const [err, response] = await to(client.textRequest(text))
  const { result: { fulfillment: { speech } } } = response
  addResponseMessage(speech)
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
