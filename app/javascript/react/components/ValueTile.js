import React from 'react'

const ValueTile = props => {

  return (
        <div className="gb-question-tub cell small-2" id={props.index} onClick={props.handleClueClick}>
          <p className="gb-question-text">{props.value}</p>
        </div>
     
  )
}

export default ValueTile
