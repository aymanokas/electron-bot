import * as constants from '../actions/constants'
import { msgChatMessageRequest } from './chatBot';

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition()
recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

export const ToggleVoiceRecognition = (data) => dispatch => {
    let handleTranscript = (transcript) => {
        if (transcript !== '') { 
            dispatch({
                type:constants.RECEIVE_TRANSCRIPT,
                data : transcript
            })
            dispatch(msgChatMessageRequest(transcript))
       }
}
    if (data){
        dispatch({
            type:constants.TOGGLE_VOICE_RECOGNITION,
            data : true
          })
        recognition.start()
        recognition.onstart = (e) => {
            console.log("Recognition Started / Continued !")
        }
        recognition.onend = (e) => {
            console.log("...continue listening...")
            recognition.start()
        }
        recognition.onresult = event => {
            //let interimTranscript = ''
            let finalTranscript = ''
            for (let i = event.resultIndex; i < event.results.length; i++) {
            let transcript = event.results[0][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript + ' '
                }
            //else interimTranscript += transcript
            }
            handleTranscript(finalTranscript)
            finalTranscript= ''
        }
        recognition.onerror = event => {
            console.log("Error occurred in recognition: " + event.error)
        }
    }else {
        dispatch({
            type:constants.TOGGLE_VOICE_RECOGNITION,
            data : false
        })
            recognition.stop()
            recognition.onend = () => {
            console.log("Stopped listening")
          }
    }   
}