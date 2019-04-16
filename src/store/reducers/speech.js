import * as constants from '../actions/constants'

const initialState = {
  speechDefaultSettings : {
      rate :1,
      volume : 1,
      pitch : 1
  },
  isListening : false,
  userVocaltranscript :''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.TOGGLE_VOICE_RECOGNITION:
    return {
      ...state,
        isListening : action.data
      }
      case constants.RECEIVE_TRANSCRIPT :
        return {
            ...state,
            userVocal : action.data
        }
    default :
      return state
  }
}
