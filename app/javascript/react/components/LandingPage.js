import React, { useState } from 'react'
import { Redirect } from 'react-router'

const LandingPage = props => {

  const [shouldRedirect, setShouldRedirect] = useState(false)
  let newGame = ""

  const startNewGame = () => {
    setShouldRedirect(true)
  }

  if (shouldRedirect) {
    if (props.signedIn === null) {
      return <Redirect to='/users/sign_in' />
    } else {
      return <Redirect to='/gameboards/new' />
    }
  } 

  return (
    <div className="welcome-text-container">
      <h1 className="intro-text">WELCOME TO JAYPARDY!</h1>
      <h3 className="intro-text">Test your General and Pop Culture Knowledge</h3>
      <div className="start-game-button-container">
        <a href={newGame}><button type="button" className="button start-game" onClick={startNewGame}>
          <i className="fa fa-trophy"></i> START A GAME! <i className="fa fa-trophy"></i>
        </button></a>
      </div>

    </div>
  )
}

export default LandingPage