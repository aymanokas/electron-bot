import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {ColorTrackingStyle} from './colorTrackingStyle'

class ColorTracking extends Component {
  
  componentDidMount(){
        /** Start Color Tracking  */
    let { tracking } = window
    const tracker = new tracking.ColorTracker(['magenta', 'cyan', 'yellow'])
    tracking.track('#video', tracker, { camera: true })
    let video = window.document.getElementById('video')
    let canvas = document.getElementById('canvas')
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && video) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          video.srcObject = stream;
          video.play();
      });
    }
    
    tracker.on('track', e => {
      if(e.data.length > 0) {
        let context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height)
        e.data.forEach((rect) => {
          context.strokeStyle = '#a64ceb'
          context.strokeRect(rect.x, rect.y, rect.width, rect.height)
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
        })
      }else {
        let context = canvas.getContext('2d')  
        context.clearRect(0, 0, canvas.width, canvas.height)}
    })
    /**END */
  }

  render(){
    let {classes} = this.props
    return (
        <div className={classes.colorTrackingRoot}>
          <h2 className={classes.title}>The colors being tracked is <span className={classes.yellowText}>Yellow</span>, <span className={classes.magentaText}>Magenta</span> and <span className={classes.cyanText}>Cyan</span></h2>
          <canvas id="canvas" width="700" height="500"></canvas>
          <video id="video" width="700" height="500" loop muted></video>
        </div>
    )
}
}
export default injectSheet(ColorTrackingStyle)(ColorTracking)
