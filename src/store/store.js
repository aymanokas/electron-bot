import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import logger from 'redux-logger'
import chatbot from "./middleware/chat-bot"

const initialState = {}
const middleWare = [thunk,chatbot, logger]
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare))

export default store
