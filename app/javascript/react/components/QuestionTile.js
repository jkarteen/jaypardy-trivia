import React, { useState, useEffect } from 'react'

const QuestionTile = (props) => {
  const [randomQuestion, setRandomQuestion] = useState()
  const [category, setCategory] = useState()

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
      
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  useEffect(() => {
    fetchQuestion()
  }, [])

  return (
    <div>
      <h1>Random Clue</h1>
      <h2 className="category-tub">{`${category}`}</h2>
      <h3 className="question-tub">{`${randomQuestion}`}</h3>
    </div>
  )
}

export default QuestionTile
