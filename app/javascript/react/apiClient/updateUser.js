const updateUser = async (user, gamesPlayed) => {
  try {
    const response = await fetch(`/api/v1/users/${user}`, {
      credentials: "same-origin",
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({games_played: gamesPlayed})
    })
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      throw new Error(errorMessage)
    }
    const responseBody = await response.json()
    console.log(responseBody)
  } catch (error) {
    console.log(`Error in Fetch: ${error.message}`)
  }
}

export default updateUser