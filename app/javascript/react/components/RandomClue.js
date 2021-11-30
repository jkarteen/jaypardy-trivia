import React, { useState, useEffect } from 'react'
import RandomQuestionTile from './RandomQuestionTile'
import AnswerForm from './AnswerForm'
import MessageRandom from './MessageRandom'

const RandomClue = props => {
  const [randomQuestion, setRandomQuestion] = useState()
  const [category, setCategory] = useState()
  const [correctAnswer, setCorrectAnswer] = useState()
  const [playerAnswer, setPlayerAnswer] = useState("")
  const [popup, setPopup] = useState()

  let result = ""

  const fetchQuestion = async () => {
    try{
      setPlayerAnswer("")
      setPopup(null)
      const response = await fetch('https://jservice.io/api/random')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setRandomQuestion(responseBody[0].question.toUpperCase())
      setCategory(responseBody[0].category.title.toUpperCase())
      setCorrectAnswer(responseBody[0].answer.toUpperCase())
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    let playerAnswerUpped = playerAnswer.toUpperCase()
    if (playerAnswerUpped === correctAnswer) {
      result = "Correct!"
      setPopup("correct")
    } else {
      result = "Incorrect!"
      setPopup("incorrect")
    }
  }

  const handlePlayerAnswer = event => {
    setPlayerAnswer(event.target.value)
  }

  return (
    <div>
      <h1 className="random-welcome">RANDOM CLUE GENERATOR</h1>
      <RandomQuestionTile
        randomQuestion={randomQuestion}
        category={category}
      />
      <MessageRandom 
        popup={popup}
        result={result}
        correctAnswer={correctAnswer}
      />
      <AnswerForm 
        handleSubmit={handleSubmit}
        handlePlayerAnswer={handlePlayerAnswer}
        fetchQuestion={fetchQuestion}
        playerAnswer={playerAnswer}
      />
    </div>
  )
}

export default RandomClue
