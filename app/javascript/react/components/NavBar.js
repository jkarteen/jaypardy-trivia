import React, { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import GameBoard from './GameBoard'
import RandomClue from './RandomClue'
import LeaderBoard from './LeaderBoard'
import UserProfile from './UserProfile'
import fetchUser from '../apiClient/fetchUser'

const NavBar = props => {
  const [signedIn, setSignedIn] = useState(null)
  let authentication = ""
  let profile = null
  let linkWrapper = "cell small-4 link-wrapper"
  let mainLinkWrapper = "cell small-4 main-link-wrapper"

  useEffect(() => {
    fetchUser().then((parsedUserData) => {
      setSignedIn(parsedUserData)
    })
  }, [])

  if (signedIn === null) {
    authentication = <div className="sign-wrapper"><a className="page-link" href="/users/sign_in">SIGN IN</a> / <a className="page-link" href="/users/sign_up">SIGN UP</a></div>
  } else {
    linkWrapper = "cell small-3 link-wrapper"
    mainLinkWrapper = "cell small-3 main-link-wrapper"
    authentication = <div><a className="page-link" href="/users/sign_out" data-method="delete">SIGN OUT</a></div>
    profile = <div className="cell small-3 link-wrapper"><Link to={`/users/${signedIn.id}`} className="page-link"> PROFILE</Link></div>
  }
  
  return (
    <div>
      <div className="grid-container navbar">
        <div className ="top-bar cell grid-x"> 
          <div className={linkWrapper}>
            <Link to="/random" className="page-link"> RANDOM CLUE </Link>
          </div>
          <div className={mainLinkWrapper}>
            <Link to="/" className="page-link"> JAYPARDY </Link>
          </div>
          {profile}
          <div className={linkWrapper}>
            <h4 className="sign-in-sign-up-sign-out">{authentication}</h4>
          </div>  
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage signedIn={signedIn}/>
          </Route>
          <Route exact path="/gameboards/new" component={GameBoard} />
          <Route exact path="/random" component={RandomClue} />
          <Route exact path="/leaderboard" component={LeaderBoard} />
          <Route exact path="/users/:id" component={UserProfile} />
        </Switch>
      </div>
    </div>
  )
}

export default NavBar