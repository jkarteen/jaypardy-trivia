import React, { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import GameBoard from './GameBoard'
import RandomClue from './RandomClue'

const NavBar = props => {
  const [signedIn, setSignedIn] = useState(null)
  let authentication = ""

  const fetchUser = async() => {
    try {
      const response = await fetch("/api/v1/users", {
        credentials: "same-origin"
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setSignedIn(responseBody.users)
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (signedIn === null) {
    authentication = <div className="sign-wrapper"><a className="page-link" href="/users/sign_in">Sign In</a> / <a className="page-link" href="/users/sign_up">Sign Up</a></div>
  } else {
    authentication = <div className="sign-wrapper"><a className="page-link" href="/users/sign_out" data-method="delete">Sign Out</a></div>
  }
  
  return (
    <div>
      <div className="grid-container navbar">
        <div className ="top-bar cell grid-x"> 
          <div className="cell small-4 link-wrapper">
            <Link to="/random" className="page-link"> Random Clue </Link>
          </div>
          <div className="cell small-4 main-link-wrapper">
            <Link to="/" className="page-link"> Jaypardy </Link>
          </div>
          <div className="cell small-4">
            <h4 className="sign-in-sign-up-sign-out">{authentication}</h4>
          </div>  
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage signedIn={signedIn}/>
          </Route>
          <Route exact path="/gameboards/new" component = {GameBoard} />
          <Route exact path="/random" component = {RandomClue} />
        </Switch>
      </div>
    </div>
  )
}

export default NavBar