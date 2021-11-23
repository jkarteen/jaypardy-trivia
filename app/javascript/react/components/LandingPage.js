import React, { useState, useEffect } from 'react'
import QuestionTile from './QuestionTile'
import AnswerForm from './AnswerForm'
import Message from './Message'

const LandingPage = props => {
  const [randomQuestion, setRandomQuestion] = useState()
  const [category, setCategory] = useState()
  const [correctAnswer, setCorrectAnswer] = useState()
  const [playerAnswer, setPlayerAnswer] = useState()
  const [popup, setPopup] = useState()

  let result = ""

  const fetchQuestion = async () => {
    try{
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
      <h1 className="welcome">Welcome to Jaypardy!</h1>
      <h5>Presented by: Jason Korwek</h5>
      <QuestionTile
        randomQuestion={randomQuestion}
        category={category}
      />
      <Message 
        popup={popup}
        result={result}
        correctAnswer={correctAnswer}
      />
      <AnswerForm 
        handleSubmit={handleSubmit}
        handlePlayerAnswer={handlePlayerAnswer}
        fetchQuestion={fetchQuestion}
      />
    </div>
  )
}

export default LandingPage
