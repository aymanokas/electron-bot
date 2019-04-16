import React, {Component} from 'react'
import ColorTracking from './colorTracking';
import FaceTracking from './faceTracking';

class ImageProcessing extends Component {

render(){
return (
  <>
  <i onClick={() => this.props.handleResetView()} className='fas fa-arrow-alt-circle-left iconback' />
   {/* <ColorTracking/> */}
   <FaceTracking/>
   </>
  )
}
}
export default ImageProcessing
