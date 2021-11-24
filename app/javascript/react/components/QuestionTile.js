import React from 'react'

const QuestionTile = (props) => {

  return (
    <div>
      <h1>Random Clue</h1>
      <h2 className="category-tub">{`${props.category}`}</h2>
      <h3 className="question-tub">{`${props.randomQuestion}`}</h3>
    </div>
  )
}

export default QuestionTile
