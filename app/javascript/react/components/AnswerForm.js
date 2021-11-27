import React from 'react'

const AnswerForm = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="answer">Answer</label>
          <input id="answer" type="text" value={props.playerAnswer} onChange={props.handlePlayerAnswer} />
          <div className="button-container">
            <input type="submit" value="Submit" className="button" />
            <button className="button" type="button" onClick={props.fetchQuestion}>Next</button>
          </div>
      </form>
    </div>
  )
}

export default AnswerForm