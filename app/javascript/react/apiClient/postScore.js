const postScore = async (user, currentScore) => {
  try {
    const response = await fetch(`/api/v1/users/${user}/scores`, {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(currentScore)
    })
    debugger
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      throw new Error(errorMessage)
    }
    const responseBody = await response.json()
    return responseBody
  } catch (error) {
    console.error(`Error in Fetch: ${error.message}`)
  }
}

export default postScore