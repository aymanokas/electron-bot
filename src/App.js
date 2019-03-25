import React, { Component } from 'react'
import logo from './logoClub.png'
import futuristic from './futuristic.jpg'
import './App.css'
import Button from './components/button/button'
import Text from './text.json'
import { connect } from 'react-redux'
import { ToggleFeatureView, ResetFeaturesView, ToggleVoiceRecognition } from './store/actions/utilities'
import { msgChatMessageRequest } from './store/actions/chatBot'
import { featuresEnum } from './constants/featuresEnum'
import DefaultMode from './components/defaultMode'
import ImageProcessing from './components/imageProcessing'
import SimpleChat from './components/simpleChat'
import UserInterface from './components/userInterface'
import VocalChat from './components/vocalChat'
import { Widget, addResponseMessage } from 'react-chat-widget'
import 'react-chat-widget/lib/styles.css'

class App extends Component {

  componentDidMount() {
    addResponseMessage("Hello, What can I do for you ?")
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <Widget
            title='Bot-x03'
            subtitle='How can I help you ?'
            handleNewUserMessage={ this.props.msgChatMessageRequest}
            badge = {this.props.hasNewMessage}
            autofocus
          />
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <span className='headerDivider' />
            <p className='headerText'>
              {Text.header}<a href='www.robotiquefsr.com' className='App-link'>{Text.website}</a>{Text.contact}<a href='aymanekas@gmail.com' className='App-link'>{Text.email}</a>.</p>
          </header>
          <div className='body'>
            <div className='descriptionSection'>
              <ul className='ul'>
                <h3 className='bodyLargeText'>{Text.descriptionSection.Introduction.title}</h3>
                <li className='section'>
                  <p className='bodyMediumText'>{Text.descriptionSection.Introduction.body}
                  </p>
                </li>
                <h3 className='bodyLargeText'>{Text.descriptionSection.description.title}</h3>
                <li className='section'>
                  <div >
                    <p className='bodyMediumText'>{Text.descriptionSection.description.body}
                    </p>
                  </div>
                </li>
                <h3 className='bodyLargeText'>{Text.descriptionSection.inspiration.title}</h3>
                <li className='section'>
                  <p className='bodyMediumText' > {Text.descriptionSection.inspiration.body1}
                  </p>
                  <div className='inspirationImageAndText'>
                    <img src={futuristic} className='inspirationPicture' alt='future' />
                    <p className='bodyMediumText'>  {Text.descriptionSection.inspiration.body2}
                    </p>
                  </div>
                </li>
                <h3 className='bodyLargeText'>{Text.descriptionSection.technologies.title}</h3>
                <li className='section'>
                  <ul className='bodyMediumText'>
                    <li className='bodyMediumText'>Javascript <a href='https://reactjs.org/' className='App-link'>React 16.8.4</a></li>
                    <li className='bodyMediumText'>Electron <a href='https://electronjs.org/' className='App-link'>4.0.8</a></li>
                    <li className='bodyMediumText'>Api.ai  <a href='https://dialogflow.com/' className='App-link'>V2.0</a></li>
                    <li className='bodyMediumText'>Express  <a href='https://expressjs.com/' className='App-link'>4.16.4</a></li>
                    <li className='bodyMediumText'>Redux </li>
                    <li className='bodyMediumText'>Firebase / Mongodb </li>
                  </ul>
                </li>
                <h3 className='bodyLargeText'>Perspective</h3>
                <li className='section'>
                  <ul className='bodyMediumText'>
                    {
                      Text.descriptionSection.Perspective.body.map((item, index) => (
                        <li key={index} className='bodyMediumText'>{item}</li>
                      ))
                    }
                  </ul>
                </li>
              </ul>
            </div>
            <div className='featuresSection'>
              { !(
                this.props.isDefaultModeVisible ||
                  this.props.isImageProcessingVisible ||
                  this.props.isSimpleChatVisible ||
                  this.props.isUserInterfaceVisible ||
                  this.props.isVocalChatVisible) &&
                  <>
                    {/* <Button handleClick={() => this.props.ToggleFeatureView(featuresEnum.simpleChat)}>start a conversation</Button> */}
                    <h3 className='bodyLargeTextFeatures' >Available features</h3>
                    <Button handleClick={() => this.props.ToggleFeatureView(featuresEnum.vocalChat)} size='medium'><i className='fab fa-rocketchat icon' />Vocal conversation</Button>
                    <Button handleClick={() => this.props.ToggleFeatureView(featuresEnum.imageProcessing)} size='medium'><i className='fas fa-camera icon' />Image processing</Button>
                    <Button handleClick={() => this.props.ToggleFeatureView(featuresEnum.userInterface)} size='medium'><i className='fas fa-user-plus icon' />Add User</Button>
                    <Button handleClick={() => this.props.ToggleFeatureView(featuresEnum.defaultMode)} size='medium'><i className='fas fa-cogs icon' />Run default</Button>
             </>
              }
              { this.props.isDefaultModeVisible && <DefaultMode handleResetView={() => this.props.ResetView()} /> }
              { this.props.isImageProcessingVisible && <ImageProcessing handleResetView={() => this.props.ResetView()} /> }
              { this.props.isSimpleChatVisible && <SimpleChat handleResetView={() => this.props.ResetView()} /> }
              { this.props.isUserInterfaceVisible && <UserInterface handleResetView={() => this.props.ResetView()} /> }
              { this.props.isVocalChatVisible && <VocalChat 
                        toggleVoiceRecognition={(data)=>this.props.toggleVoiceRecognition(data)} 
                        isVocalChatActive = {this.props.isVocalChatActive} 
                        handleResetView={() => this.props.ResetView()} /> 
                        }

            </div>
          </div>
        </div>
        <footer className='footer'>
          <p className='footerText'>- Made with &hearts; by a Robotics Fsr club member -</p>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isDefaultModeVisible: state.utilities.featureViews.isDefaultModeVisible,
  isImageProcessingVisible: state.utilities.featureViews.isImageProcessingVisible,
  isSimpleChatVisible: state.utilities.featureViews.isSimpleChatVisible,
  isUserInterfaceVisible: state.utilities.featureViews.isUserInterfaceVisible,
  isVocalChatVisible: state.utilities.featureViews.isVocalChatVisible,
  isVocalChatActive : state.utilities.activeFeature.isVocalChatActive,
  hasNewMessage : (state.processChatMessage.messages.length + 1 ) / 2
})

const mapDispatchToProps = dispatch => ({
  ToggleFeatureView: (featureId) => {
    dispatch(ToggleFeatureView(featureId))
  },
  ResetView: () => {
    dispatch(ResetFeaturesView())
  },
  toggleVoiceRecognition: (data) => {
    dispatch(ToggleVoiceRecognition(data))
  },
  msgChatMessageRequest : (text) => {
    dispatch(msgChatMessageRequest(text))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
