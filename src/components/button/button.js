import React from 'react'

const Button = (props) => {
  return (
    <div style={style.root}>
      <button className={style.test} style={props.size === 'medium' ? style.mediumButton : style.normalButton} onClick={() => props.handleClick()} disabled={props.disabled}>
        {props.children}
      </button>
    </div>
  )
}

const style = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  normalButton: {
    width: '60%',
    color: 'white',
    height: 50,
    backgroundColor: 'transparent',
    border: '1px solid #61dafb ',
    marginTop: 15,
    marginBottom: 15,
    cursor: 'pointer',
    fontSize: 17
  },
  mediumButton: {
    width: '40%',
    color: 'white',
    height: 50,
    backgroundColor: 'transparent',
    border: '1px solid #61dafb ',
    marginTop: 15,
    marginBottom: 15,
    cursor: 'pointer',
    fontSize: 17
  }
}
export default Button
