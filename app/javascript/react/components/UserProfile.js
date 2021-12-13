import React, { useEffect, useState } from 'react'

const UserProfile = props => {
  const [currentUser, setCurrentUser] = useState({
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    username: ""
  })
  const [topScore, setTopScore] = useState(null)

  const id = props.match.params.id
  const fetchUser = async() => {
    try {
      const response = await fetch(`/api/v1/users/${id}`, {
        credentials: "same-origin"
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setCurrentUser(responseBody[0].user)
      setTopScore(responseBody[0].score[0].total)
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="content-wrapper">
      <h2 className="details-wrapper">{currentUser.username}'s Profile</h2>
      <h5 className="details-wrapper">Name: {currentUser.first_name} {currentUser.last_name}</h5>
      <h5 className="details-wrapper">Contact Info: {currentUser.email}</h5>
      <h5 className="details-wrapper">Games Played: {currentUser.games_played}</h5>
      <h5 className="details-wrapper">Personal Best: {topScore}</h5>
    </div>
  )
}

export default UserProfile
