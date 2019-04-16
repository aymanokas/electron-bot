import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {FaceTrackingStyle} from './faceTrackingStyle'

class FaceTracking extends Component {
  
  componentDidMount(){
  
    let {tracking}  = window
     
    let video = window.document.getElementById('video')
    let canvas = document.getElementById('canvas')
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && video) { 
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          video.srcObject = stream;
          video.play();
      });
    }
    var objects = new tracking.ObjectTracker(["face", "eye", "mouth"]);
    objects.on('track', function(event) {
      if (event.data.length === 0) {
      } else {
        event.data.forEach(function(rect) {
        });
      }
    });
    tracking.track('video', objects);
  
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
