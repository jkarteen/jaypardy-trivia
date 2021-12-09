import React, { useEffect, useState } from 'react'

const UserProfile = props => {
  const [currentUser, setCurrentUser] = useState({
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    username: ""
  })

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
      setCurrentUser(responseBody.user)
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      <h2>{currentUser.username}'s Profile</h2>
      <h5>Name: {currentUser.first_name} {currentUser.last_name}</h5>
      <h5>Contact Info: {currentUser.email}</h5>
    </div>
  )
}

export default UserProfile
