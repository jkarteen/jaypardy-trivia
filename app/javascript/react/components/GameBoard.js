import React, { useState, useEffect } from 'react'
import CategoryTile from './CategoryTile'
import ValueTile from './ValueTile'
import ClueModal from './ClueModal'
import clueGrabber from './clueGrabber'
import Score from './Score'
import fetchUser from '../apiClient/fetchUser' 
import fetchCategories from '../apiClient/fetchCategories'

const GameBoard = props => {
  const [categoriesArray, setCategoriesArray] = useState([])
  const [modalShow, setModalShow] = useState({show: false})
  const [popup, setPopup] = useState()
  const [playerAnswer, setPlayerAnswer] = useState("")
  const [currentClue, setCurrentClue] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [currentScore, setCurrentScore] = useState({total: 0})
  const [buttonShow, setButtonShow] = useState("submit")

  useEffect(() => {
    fetchUser().then((parsedUserData) => {
      setCurrentUser(parsedUserData)
    })
  }, [])
  
  useEffect(() => {
    fetchCategories().then((parsedCategoryData) => {
      setCategoriesArray(parsedCategoryData)
    })
  }, [])

  const handlePlayerAnswer = event => {
    setPlayerAnswer(event.target.value)
  }

  const handleClueClick = event => {
    let selected = event.currentTarget.children[0]
    if (selected.innerText !== "") {
      selected.innerText = ""
      let selectedClue = clueGrabber(event.currentTarget.id, categoriesArray)
      if (selectedClue.answered === false) {
        setCurrentClue(selectedClue)
        showModal()
      }
    }
  }

  const showModal = () => {
    setModalShow({show: true})
  }

  const hideModal = () => {
    setModalShow({show: false})
    setPopup("")
    setPlayerAnswer("")
    setButtonShow("submit")
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
      <Score currentScore={currentScore}/>
      <div className="grid-x">
        {categories}
      </div>
      <ClueModal 
        modalShow={modalShow}
        showModal={showModal}
        hideModal={hideModal}
        currentClue={currentClue}
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
        popup={popup}
        setPopup={setPopup}
        handlePlayerAnswer={handlePlayerAnswer}
        playerAnswer={playerAnswer}
        setPlayerAnswer={setPlayerAnswer}
        buttonShow={buttonShow}
        setButtonShow={setButtonShow}
        currentUser={currentUser}
      />
      <div className="grid-x">
        {clueValues}
      </div>
    </div>
  )
}

export default GameBoard