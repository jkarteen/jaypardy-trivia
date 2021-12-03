import React from 'react'

const HighScoreTile = props => {
  
  return (
    <div className="scores-container">
      <div className="grid-x">
        <div id="rank">
          <h4 id="rank-entry">{props.rank}.</h4>
        </div>
        <div id="username">
          <h4 id="username-entry">{props.username}</h4>
        </div>
        <div id="high-score">
          <h4 id="high-score-entry">{props.highScore}</h4>
        </div>
      </div>
    </div>
  )
}

export default HighScoreTile