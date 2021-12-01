import React, { useState, useEffect } from 'react'
import GameMessage from './GameMessage'
import postScore from '../apiClient/postScore'

const ClueModal = props => {
  const [progressCounter, setProgressCounter] = useState(0)

  if (progressCounter === 25){
    debugger
    postScore(props.currentUser.id, props.currentScore)
    setProgressCounter(0)
  }

  const handleSubmit = event => {
    event.preventDefault()
    let disableEnter = document.getElementById("modal-form")
    disableEnter.addEventListener("keypress", event => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    })
    if (props.playerAnswer.toUpperCase() === props.currentClue.answer.toUpperCase()) {
      let scoreClone = props.currentScore.total
      let updatedScore = scoreClone + props.currentClue.value
      props.setCurrentScore({total: updatedScore})
      props.setPopup("correct")
    } else {
      props.setPopup("incorrect")
    }
    setProgressCounter(progressCounter + 1)
    props.setButtonShow("continue")
  }

  let buttonChoice = ""
  if (props.buttonShow === "submit") {
    buttonChoice = <input type="submit" value="SUBMIT" className="button" />
  } else {
    buttonChoice = null
  }
  
  if (!props.modalShow.show) {
    return null
  } else {
    return (
      <div className="modal">
        <div>
          <h4 id="modalClue">{props.currentClue.question.toUpperCase()}</h4>
          <GameMessage 
            popup={props.popup}
            currentAnswer={props.currentClue.answer.toUpperCase()}
          />
          <div className="form-container">
            <form id="modal-form" onSubmit={handleSubmit}>
              <label id="answer-label" htmlFor="answer">ANSWER</label>
                <input id="answer" type="text" value={props.playerAnswer} onChange={props.handlePlayerAnswer} />
                <div className="button-container">
                  {buttonChoice}
                </div>
            </form>
            <button id="continue-button" type="button" className="button" onClick={props.hideModal}>CONTINUE</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClueModal