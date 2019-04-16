import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {FaceTrackingStyle} from './faceTrackingStyle'

class FaceTracking extends Component {
  
  componentDidMount(){
  
    let {tracking}  = window
     
    let video = window.document.getElementById('video')
    let canvas = document.getElementById('canvas')
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && video) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          //video.src = window.URL.createObjectURL(stream);
          video.srcObject = stream;
          video.play();
      });
    }
    var objects = new tracking.ObjectTracker(["face", "eye", "mouth"]);
    objects.on('track', function(event) {
      if (event.data.length === 0) {
        // No objects were detected in this frame.
      } else {
        event.data.forEach(function(rect) {
          // rect.x, rect.y, rect.height, rect.width
        });
      }
    });
    tracking.track('video', objects);
    // let width = 700
    // let height = 500
    // let pixels = 500
    // let self = this
  
  }
render(){
    let {classes} = this.props
return (
    <div className={classes.colorTrackingRoot}>
      <h2 className={classes.title}>Face Tracking</h2>
      <canvas id="canvas" width="700" height="500"></canvas>
      <video id="video" width="700" height="500" loop muted></video>
    </div>
  )
}
}
export default injectSheet(FaceTrackingStyle)(FaceTracking)
