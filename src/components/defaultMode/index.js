import React from 'react'

const DefaultMode = (props) => {
  return (
    <div>
      <h1>Default Mode</h1>
      <i onClick={() => props.handleResetView()} className='fas fa-arrow-alt-circle-left iconback' />
    </div>
  )
}
export default DefaultMode
