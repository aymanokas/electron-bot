import * as constants from './constants'

let isErrorMessage = false
let onProcess = false
let sender = "Bot"
let error = null

// action creator
export const msgChatMessageRequest = text => ({
  type: constants.CHAT_MESSAGE_REQUEST,
  payload: {
    message: {
      text,
      sender: "User",
      isErrorMessage
    },
    onProcess: true,
    error
  }
})

export const msgChatMessageSuccess = text => ({
  type: constants.CHAT_MESSAGE_SUCCESS,
  payload: {
    message: {
      text,
      sender,
      isErrorMessage
    },
    onProcess,
    error
  }
  
})

export const msgChatMessageError = error => ({
  type: constants.CHAT_MESSAGE_ERROR,
  payload: {
    message: {
      text: "Sorry! " + error.message,
      sender,
      isErrorMessage: true
    },
    onProcess,
    error
  }
})