export const VocalChatStyle = {
  title:{
  color:'white',
  fontSize:24,
  textAlign: 'center',
  fontWeight:600,
  marginBottom:20
  },
  successText:{
    color: '#00e600',
    fontSize:14,
    textAlign: 'center',
    fontWeight:600,
    marginBottom:20
  },
  smallText:{
    color:'#ffffff91',
    fontSize:14,
    textAlign: 'center',
    fontWeight:400,
    marginBottom:20
  },
  ballContainer:{
    height: 300,
    width: 300,
  },
  rotationBall:{
    height: 300,
    width: 300,
    animation: props => props.isVocalChatActive && 'ball-spin infinite .05s 0s linear'
  },
  '@keyframes ball-spin' : {
    '0% ':{
      transform: 'rotate(0deg)',
    },
    '100%' : {
      transform: 'rotate3d(2, 4, 3, 360deg)'
    }
  }}
