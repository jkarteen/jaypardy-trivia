import React, { useState } from 'react'
import GameMessage from './GameMessage'
import postScore from '../apiClient/postScore'
import updateUser from '../apiClient/updateUser'

const ClueModal = props => {
  const [progressCounter, setProgressCounter] = useState(0)

  if (progressCounter === 25){
    let scoreObj = {total: props.currentScore.total, user_id: props.currentUser.id} 
    postScore(scoreObj)
    updateUser(props.currentUser.id, props.currentUser.games_played + 1)
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

  let submitButtonChoice = ""
  let continueButtonChoice = ""
  if (props.buttonShow === "submit") {
    submitButtonChoice = <input type="submit" value="SUBMIT" className="button" />
    continueButtonChoice = null
  } else {
    submitButtonChoice = null
    continueButtonChoice = <button id="continue-button" type="button" className="button" onClick={props.hideModal}>CONTINUE</button>
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
                  {submitButtonChoice}
                </div>
            </form>
            {continueButtonChoice}
          </div>
        </div>
      </div>
    )
  }
}

export default ClueModal