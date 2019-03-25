import React from 'react'

const UserInterface = (props) => {
  return (
    <div>
      <h1>User Interface</h1>
      <i onClick={() => props.handleResetView()}className='fas fa-arrow-alt-circle-left iconback' />
    </div>
  )
}
export default UserInterface
