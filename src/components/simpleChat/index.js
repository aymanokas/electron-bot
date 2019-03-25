import React from 'react'
import { Widget } from 'react-chat-widget'
import 'react-chat-widget/lib/styles.css'

const SimpleChat = (props) => {
  return (
    <div>
      <h1>Simple chat</h1>
      <i onClick={() => props.handleResetView()}className='fas fa-arrow-alt-circle-left iconback' />
      <Widget
        title='Bot-x03 at your service'
        subtitle='What can i do for you ?'
      />
    </div>
  )
}

export default SimpleChat
