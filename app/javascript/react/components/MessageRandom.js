import React from 'react'

const MessageRandom = props => {

  if (props.popup === "correct") {
    return (
      <div>
        <h4 className={props.popup}>Correct!</h4>
      </div>
    )
  } else if (props.popup === "incorrect") {
    return (
      <div>
        <h4 className={props.popup}>Incorrect!</h4>
        <h4>The correct answer is: {props.correctAnswer}</h4>
      </div>
    )
  } else {
    return null
  }
}

export default MessageRandom