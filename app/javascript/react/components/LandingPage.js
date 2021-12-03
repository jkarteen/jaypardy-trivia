import React, { useState } from 'react'
import { Redirect } from 'react-router'

const LandingPage = props => {

  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [showLeaderBoard, setShowLeaderBoard] = useState(false)
  let newGame = ""

  const startNewGame = () => {
    setShouldRedirect(true)
  }

  const viewLeaderBoard = () => {
    setShowLeaderBoard(true)
  }

  if (shouldRedirect) {
    if (props.signedIn === null) {
      return <Redirect to='/users/sign_in' />
    } else {
      return <Redirect to='/gameboards/new' />
    }
  } 

  if (showLeaderBoard) {
    return <Redirect to='/leaderboard' />
  }

  return (
    <div className="welcome-text-container">
      <h1 className="intro-text">WELCOME TO JAYPARDY!</h1>
      <h3 className="intro-text">Test your General and Pop Culture Knowledge</h3>
      <div className="landing-page-button-container">
        <a href={newGame}><button type="button" className="button start-game" onClick={startNewGame}> START A GAME! </button></a>
        <a><button type="button" className="button leaderboard" onClick={viewLeaderBoard}><i className="fa fa-trophy"></i> LEADER BOARD <i className="fa fa-trophy"></i></button></a>
      </div>

    </div>
  )
}

export default LandingPage