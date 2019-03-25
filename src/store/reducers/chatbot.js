import * as constants from "../actions/constants"

const initState = {
  messages: [
    {
      text: "Welcome! what can I do for you ?",
      sender: "Bot",
      isErrorMessage: false
    }
  ],
  onProcess: false,
  error: null
}

const processChatMessage = (state, action) => {
  const { messages } = state
  const { message } = action.payload
  const newMessages = [...messages, message]
  return { ...state, messages: newMessages }
}

const commitChatMessageRequest = processChatMessage
const commitChatMessageSuccess = processChatMessage
const commitChatMessageError = processChatMessage

const ChatMessageReducer = (state = initState, action) => {
  let newState
  switch (action.type) {
    case constants.CHAT_MESSAGE_REQUEST:
      newState = commitChatMessageRequest(state, action)
      break
    case constants.CHAT_MESSAGE_SUCCESS:
      newState = commitChatMessageSuccess(state, action)
      break
    case constants.CHAT_MESSAGE_ERROR:
      newState = commitChatMessageError(state, action)
      break
    default:
      newState = state
  }
  return newState
}

export default ChatMessageReducer
