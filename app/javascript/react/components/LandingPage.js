import React, { useState, useEffect } from 'react'
import QuestionTile from './QuestionTile'

const LandingPage = (props) => {

  return (
    <div>
      <h1 className="welcome">Welcome to Jaypardy!</h1>
      <h4>Presented by: Jason Korwek</h4>
      <p>With support from the awesome Launch Academy Experience Engineers</p>
      <QuestionTile />
    </div>
  )
}

export default LandingPage
