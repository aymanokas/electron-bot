import * as constants from '../actions/constants'

const initialState = {
  featureViews: {
    isDefaultModeVisible: false,
    isImageProcessingVisible: false,
    isSimpleChatVisible: false,
    isUserInterfaceVisible: false,
    isVocalChatVisible: false
  },
  activeFeature:{
    isDefaultModeActive: false,
    isImageProcessingActive: false,
    isSimpleChatActive: false,
    isUserInterfaceActive: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.TOGGLE_VIEWS :
      return {
        ...state,
        featureViews: { ...action.data }
      }
    case constants.RESET_FEATURES_VIEW :
      return {
        ...state,
        featureViews: { ...action.data }
      }
    default :
      return state
  }
}
