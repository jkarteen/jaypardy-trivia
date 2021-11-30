import React from 'react'

const AnswerForm = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <label id="random-answer" htmlFor="answer">ANSWER</label>
          <input id="answer" type="text" value={props.playerAnswer} onChange={props.handlePlayerAnswer} />
          <div className="button-container">
            <input type="submit" value="SUBMIT" className="button" />
            <button className="button" type="button" onClick={props.fetchQuestion}>NEXT</button>
          </div>
      </form>
    </div>
  )
}

export default AnswerForm