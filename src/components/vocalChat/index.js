import React from 'react'
import {VocalChatStyle} from './VocalChatStyle'
import rotatingBall from '../../ballRotating.png'
import Button from './../button/button'
import injectSheet from 'react-jss'

const VocalChat = (props) => {
  let {classes} = props
  return (
    <div>
      <h1 className={classes.title}>{props.isVocalChatActive ? 'Bot-0x3 is listening....' : 'Voice processing' }</h1>
      <span className={classes.ballContainer}><img className={classes.rotationBall} src={rotatingBall} alt='rotationBall' /></span>
      <Button handleClick={() => props.toggleVoiceRecognition(!props.isVocalChatActive)} size='medium'>{props.isVocalChatActive ? 'Stop' : 'Start'}</Button>
      {props.isVocalChatActive && 
      <>
      <p className={classes.successText}>Action dispatched succefully !</p>
      <p className={classes.smallText}>-You can now intract with Bot-0x3-</p>
      </>
    }
      <i onClick={() => props.handleResetView()} className='fas fa-arrow-alt-circle-left iconback' />
    </div>
  )
}
export default  injectSheet(VocalChatStyle)(VocalChat)
