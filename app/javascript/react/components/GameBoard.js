import React, { useState, useEffect } from 'react'
import CategoryTile from './CategoryTile'
import ValueTile from './ValueTile'

const GameBoard = props => {
  const [categoriesArray, setCategoriesArray] = useState([])

  const getRandomCategories = () => {
    return Math.floor(Math.random() * 18405)
  }

  const offset = getRandomCategories()

  const fetchCategories = async () => {
    try {
      const response = await fetch(`https://jservice.io/api/categories?count=5&offset=${offset}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setCategoriesArray(responseBody)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  useEffect(() => {
    fetchCategories()
  }, [])
  
  const categories = categoriesArray.map((category) => {

    return (
        <CategoryTile
          key={category.id}
          title={category.title}
        />
    )
  })

  let clueValuesArray = []

  for (let i = 0; i < 25; i++) {
    if (i < 5) {
      let clueDiv = 200
      clueValuesArray.push(clueDiv)
    } else if (i < 10) {
      let clueDiv = 400
      clueValuesArray.push(clueDiv)
    } else if (i < 15) {
      let clueDiv = 600
      clueValuesArray.push(clueDiv)
    } else if (i < 20) {
      let clueDiv = 800
      clueValuesArray.push(clueDiv)
    }else {
      let clueDiv = 1000
      clueValuesArray.push(clueDiv)
    }
  }
  
  const clueValues = clueValuesArray.map((value) => {
  
    return (
      <ValueTile 
        value={value}
      />
    )
  })
  
  return (
    <div>
      <div className="grid-x">
        {categories}
      </div>
      <div className="grid-x">
        {clueValues}
      </div>
    </div>
  )
}

export default GameBoard