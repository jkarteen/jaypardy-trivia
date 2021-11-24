import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RandomClue from './RandomClue'
import GameBoard from './GameBoard'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GameBoard} />
        <Route exact path="/random" component={RandomClue} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
