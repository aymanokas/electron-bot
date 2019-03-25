import React from 'react'

const ImageProcessing = (props) => {
  return (
    <div>
      <h1>Image Processing</h1>
      <i onClick={() => props.handleResetView()} className='fas fa-arrow-alt-circle-left iconback' />
    </div>
  )
}
export default ImageProcessing
