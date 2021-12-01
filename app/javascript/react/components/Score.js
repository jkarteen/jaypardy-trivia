import React from 'react'

const Score = props => {
  return (
    <div className="score-container">
        <h4 id="score">SCORE: {props.currentScore.total}</h4>
      </div>
  )
}

export default Score
