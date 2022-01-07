import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import defaultPic from '../../../assets/images/profile-default.jpeg'

const UserProfile = props => {

  const [currentUser, setCurrentUser] = useState({
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    profile_photo: ""
  })
  const [profilePic, setProfilePic] = useState("")
  const [profileImage, setProfileImage] = useState({image: "", status: false})
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
      if (responseBody[0].user.profile_photo.url == null) {
        setProfilePic(defaultPic)
      } else {
        setProfilePic(responseBody[0].user.profile_photo.url)
        }
      if (responseBody[0].score[0] == undefined) {
        setTopScore("N/A")
      } else {
        setTopScore(responseBody[0].score[0].total)
      }
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  useEffect(() => {
    fetchUser()
  }, [])

  const addProfilePhoto = async (event) => {
    event.preventDefault()
    let body = new FormData()
    body.append("profile_photo", profileImage.image)
    try{
      const response = await fetch(`/api/v1/users/${id}`,{
        credentials: "same-origin",
        method: "PATCH",
        body: body
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const newPhoto = await response.json()
      setProfilePic(newPhoto.user.profile_photo.url)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  const handleFileUpload = (acceptedFiles) => {
    setProfileImage({image: acceptedFiles[0]})
  }

  return (
    <div className="profile-container">
      <div className="image-wrapper">
        <form onSubmit={addProfilePhoto}>
          <Dropzone onDrop={handleFileUpload}>
            {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <img src={profilePic} className="photo" id="profile-photo"></img>
                  <p id="profile-para">Click photo or drag 'n' drop to upload a custom photo!</p>
                </div>
              </section>
            )}
          </Dropzone>
          <input className="profile-button" type="submit" value="Submit" />
        </form>
      </div>
      <div className="content-wrapper">
        <h2 className="details-wrapper">{currentUser.username}'s Profile</h2>
        <h5 className="details-wrapper">Name: {currentUser.first_name} {currentUser.last_name}</h5>
        <h5 className="details-wrapper">Contact Info: {currentUser.email}</h5>
        <h5 className="details-wrapper">Games Played: {currentUser.games_played}</h5>
        <h5 className="details-wrapper">Personal Best: {topScore}</h5>
      </div>
    </div>
  )
}

export default UserProfile
