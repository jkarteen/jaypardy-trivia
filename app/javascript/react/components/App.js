import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './LandingPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={LandingPage} />
    </BrowserRouter>
  )
}

export default App
