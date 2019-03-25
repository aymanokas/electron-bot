import { combineReducers } from 'redux'
import utilities from './utilities'
import processChatMessage from './chatbot'

export default combineReducers({
  utilities,
  processChatMessage
})
