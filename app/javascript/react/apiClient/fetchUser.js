const fetchUser = async() => {
  try {
    const response = await fetch("/api/v1/users", {
      credentials: "same-origin"
    })
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      throw new Error(errorMessage)
    }
    const responseBody = await response.json()
    return responseBody.user
  } catch(error) {
    console.error(`Error in Fetch: ${error.message}`)
  }
}

export default fetchUser
