import React from 'react'

const MessageRandom = props => {

  if (props.popup === "correct") {
    return (
      <div>
        <h4 className={props.popup}>CORRECT!</h4>
      </div>
    )
  } else if (props.popup === "incorrect") {
    return (
      <div>
        <h4 className={props.popup}>INCORRECT!</h4>
        <h4>THE CORRECT ANSWER IS: {props.correctAnswer}</h4>
      </div>
    )
  } else {
    return null
  }
}

export default MessageRandom
