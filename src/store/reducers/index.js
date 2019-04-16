import { combineReducers } from 'redux'
import utilities from './utilities'
import processChatMessage from './chatbot'
import speech from './speech'

export default combineReducers({
  utilities,
  processChatMessage,
  speech
})
