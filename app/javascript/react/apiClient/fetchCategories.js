const fetchCategories = async () => {
  try {
    const response = await fetch("/api/v1/gameboards/new")
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      throw new Error(errorMessage)
    }
    const responseBody = await response.json()
    console.log(responseBody)
    return responseBody.categories
  } catch (error) {
    console.error(`Error in Fetch: ${error.message}`)
  }
}
  
export default fetchCategories
