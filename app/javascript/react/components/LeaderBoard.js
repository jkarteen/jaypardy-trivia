import React, { useState, useEffect } from 'react'
import HighScoreTile from './HighScoreTile'

const LeaderBoard = props => {
  const [topScores, setTopScores] = useState([])

  const fetchScores = async () => {
    try {
      const response = await fetch('/api/v1/scores')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setTopScores(responseBody.scores)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchScores()
  }, [])

  const highScores = topScores.map((score, index) => {
    return (
      <HighScoreTile
        key={score.id} 
        rank={index+1}
        username={score.user.username}
        highScore={score.total}
      />
    )
  })

  return (
    <div className="top-scores-container">
      <h1>Top Scores</h1>
      {highScores}
    </div>
  )
}

export default LeaderBoard