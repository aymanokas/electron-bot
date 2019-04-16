import * as constants from './constants'
import { featuresEnum } from '../../constants/featuresEnum'

export const ToggleFeatureView = (featureId) => dispatch => {
  let featuresViews = {
    isDefaultModeVisible: false,
    isImageProcessingVisible: false,
    isSimpleChatVisible: false,
    isUserInterfaceVisible: false,
    isVocalChatVisible: false
  }
  switch (featureId) {
    case featuresEnum.simpleChat : featuresViews.isSimpleChatVisible = true
      break
    case featuresEnum.vocalChat : featuresViews.isVocalChatVisible = true
      break
    case featuresEnum.imageProcessing : featuresViews.isImageProcessingVisible = true
      break
    case featuresEnum.userInterface : featuresViews.isUserInterfaceVisible = true
      break
    case featuresEnum.defaultMode : featuresViews.isDefaultModeVisible = true
      break
    default : return {
      featuresViews
    }
  }
  dispatch({
    type: constants.TOGGLE_VIEWS,
    data: featuresViews
  })
}

export const ResetFeaturesView = _ => dispatch => {
  let featuresViews = {
    isDefaultModeVisible: false,
    isImageProcessingVisible: false,
    isSimpleChatVisible: false,
    isUserInterfaceVisible: false,
    isVocalChatVisible: false
  }
  dispatch({
    type: constants.RESET_FEATURES_VIEW,
    data: featuresViews
  })
}


