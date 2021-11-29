import React, { useState, useEffect } from 'react'
import CategoryTile from './CategoryTile'
import ValueTile from './ValueTile'
import ClueModal from './ClueModal'
import clueGrabber from './clueGrabber'

const GameBoard = props => {
  const [categoriesArray, setCategoriesArray] = useState([])
  const [modalShow, setModalShow] = useState({show: false})
  const [currentClue, setCurrentClue] = useState()

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/v1/gameboards/new")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setCategoriesArray(responseBody.categories)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const handleClueClick = event => {
    let selected = event.currentTarget.children[0]
    selected.innerText = ""
    setCurrentClue(clueGrabber(event.currentTarget.id, categoriesArray))
    showModal()
  }
  
  useEffect(() => {
    fetchCategories()
  }, [])

  const showModal = () => {
    setModalShow({show: true})
  }

  const hideModal = () => {
    setModalShow({show: false})
  }
  
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
  
  const clueValues = clueValuesArray.map((value, index) => {
    return (
      <ValueTile 
        key={index}
        value={value}
        index={index}
        handleClueClick={handleClueClick}
      />
    )
  })
  
  return (
    <div>
      <div className="grid-x">
        {categories}
      </div>
      <ClueModal 
        modalShow={modalShow}
        showModal={showModal}
        hideModal={hideModal}
        currentClue={currentClue}
      />
      <div className="grid-x">
        {clueValues}
      </div>
    </div>
  )
}

export default GameBoard