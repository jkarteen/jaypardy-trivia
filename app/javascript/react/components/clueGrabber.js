const clueGrabber = (tile, array) => {
  let categoryClue = null
  if (tile == 0) {
    categoryClue = array[0].clues[0]
  } else if (tile == 1) {
    categoryClue = array[1].clues[0]
  } else if (tile == 2) {
    categoryClue = array[2].clues[0]
  } else if (tile == 3) {
    categoryClue = array[3].clues[0]
  } else if (tile == 4) {
    categoryClue = array[4].clues[0]
  } else if (tile == 5) {
    categoryClue = array[0].clues[1]
  } else if (tile == 6) {
    categoryClue = array[1].clues[1]
  } else if (tile == 7) {
    categoryClue = array[2].clues[1]
  } else if (tile == 8) {
    categoryClue = array[3].clues[1]
  } else if (tile == 9) {
    categoryClue = array[4].clues[1]
  } else if (tile == 10) {
    categoryClue = array[0].clues[2]
  } else if (tile == 11) {
    categoryClue = array[1].clues[2]
  } else if (tile == 12) {
    categoryClue = array[2].clues[2]
  } else if (tile == 13) {
    categoryClue = array[3].clues[2]
  } else if (tile == 14) {
    categoryClue = array[4].clues[2]
  } else if (tile == 15) {
    categoryClue = array[0].clues[3]
  } else if (tile == 16) {
    categoryClue = array[1].clues[3]
  } else if (tile == 17) {
    categoryClue = array[2].clues[3]
  } else if (tile == 18) {
    categoryClue = array[3].clues[3]
  } else if (tile == 19) {
    categoryClue = array[4].clues[3]
  } else if (tile == 20) {
    categoryClue = array[0].clues[4]
  } else if (tile == 21) {
    categoryClue = array[1].clues[4]
  } else if (tile == 22) {
    categoryClue = array[2].clues[4]
  } else if (tile == 23) {
    categoryClue = array[3].clues[4]
  } else if (tile == 24) {
    categoryClue = array[4].clues[4]
  } 
  return categoryClue
}

export default clueGrabber