import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {VocalChatStyle} from './VocalChatStyle'
import rotatingBall from '../../ballRotating.png'
import Button from './../button/button'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

class VocalChat extends Component {
  constructor(props) {
  super()
}
componentWillMount(){
//   console.warn('mountedd')
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// const recognition = new SpeechRecognition()
// recognition.continous = true
// recognition.interimResults = true
// recognition.lang = 'en-US'
//   const synth = window.speechSynthesis
//   let speech = new SpeechSynthesisUtterance('hello how are you')
//   speech.rate = this.props.rate
//   speech.pitch = this.props.pitch
//   speech.volume = this.props.volume
//   speech.voice = speechSynthesis.getVoices()[2]
//   synth.speak(speech)
}
componentWillUpdate() {
    console.warn('updated')
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'
  const synth = window.speechSynthesis
  let speech = new SpeechSynthesisUtterance('hello how are you')
  speech.rate = this.props.rate
  speech.pitch = this.props.pitch
  speech.volume = this.props.volume
  speech.voice = speechSynthesis.getVoices()[0]
  synth.speak(speech)
}
 render(){
  let {classes} = this.props
  return (
    <div>
      <h1 className={classes.title}>{this.props.isVocalChatActive ? 'Bot-0x3 is listening....' : 'Voice processing' }</h1>
      <span className={classes.ballContainer}><img className={classes.rotationBall} src={rotatingBall} alt='rotationBall' /></span>
      <Button handleClick={() => this.props.toggleVoiceRecognition(!this.props.isListening)} size='medium'>{this.props.isListening ? 'Stop' : 'Start'}</Button>
      {this.props.isListening && 
      <>
      <p className={classes.successText}>Action dispatched succefully !</p>
      <p className={classes.smallText}>-You can now intract with Bot-0x3-</p>
      </>
    }
      <i onClick={() => this.props.handleResetView()} className='fas fa-arrow-alt-circle-left iconback' />
    </div>
  )
}
}

VocalChat.propTypes = {
  voice: PropTypes.string,
  rate: PropTypes.number,
  volume: PropTypes.number,
  text: PropTypes.string,
  children: PropTypes.any
}



const mapStateToProps = state => ({
  rate : state.speech.speechDefaultSettings.rate,
  volume : state.speech.speechDefaultSettings.volume,
  pitch : state.speech.speechDefaultSettings.pitch,
  isListening : state.speech.isListening,

})

const mapDispatchToProps = dispatch => ({
 
})


export default  connect(mapStateToProps, mapDispatchToProps)(injectSheet(VocalChatStyle)(VocalChat))
