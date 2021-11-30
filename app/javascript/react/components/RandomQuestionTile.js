import React from 'react'

const RandomQuestionTile = (props) => {

  return (
    <div>
      <h2 className="category-tub">{`${props.category}`}</h2>
      <h3 className="question-tub">{`${props.randomQuestion}`}</h3>
    </div>
  )
}

export default RandomQuestionTile
