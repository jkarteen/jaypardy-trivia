import React, { useState, useEffect } from 'react'
import GameMessage from './GameMessage'

const ClueModal = props => {
  const [playerAnswer, setPlayerAnswer] = useState("")
  const [popup, setPopup] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    let playerAnswerUpped = playerAnswer.toUpperCase()
    if (playerAnswerUpped === props.currentClue.answer.toUpperCase()) {
      setPopup("correct")
    } else {
      setPopup("incorrect")
    }
  }

  const handlePlayerAnswer = event => {
    setPlayerAnswer(event.target.value)
  }
  
  if (!props.modalShow.show) {
    return null
  } else {
    return (
      <div className="modal">
        <div>
          <h4 id="modalClue">{props.currentClue.question}</h4>
          <GameMessage 
            popup={popup}
            currentAnswer={props.currentClue.answer}
          />
          <div className="form-container">
            <form className="modal-form" onSubmit={handleSubmit}>
              <label id="answer-label" htmlFor="answer">Answer</label>
                <input id="answer" type="text" value={playerAnswer} onChange={handlePlayerAnswer} />
                <div className="button-container">
                  <input type="submit" value="Submit" className="button" />
                  <button type="button" className="button" onClick={props.hideModal}>Continue</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ClueModal