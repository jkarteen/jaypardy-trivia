import React from 'react'

const CategoryTile = props => {
  return (
    <div className="gb-category-tub cell small-2">
      <h4 className="gb-category-text">{props.title.toUpperCase()}</h4>
    </div>
  )
}

export default CategoryTile
