// Importing React and useState, useEffect hooks from 'react' library
import React, { useState, useEffect } from 'react'
// Importing axios for making API calls
import axios from 'axios'

// Define a functional component UseEffect
const UseEffect = () => {
  // Initializing state variables for data and refresh flag
  const [data, setData] = useState('')
  const [refresh, setRefresh] = useState(true)

  // Define the side effect to fetch data from the API
  useEffect(() => {
    // Making a GET request to fetch comments from the API
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        // Updating the data state with a random email from the response
        setData(response.data[Math.floor(Math.random() * 100)].email)
      })
      .catch((error) => {
        // Handling any errors that occur during the API call
        console.error('Error fetching data:', error)
      })
    // Logging a message to indicate that the API call was made
    console.log('API called in component UseEffect')
  }, [refresh]) // Run the effect whenever the refresh flag changes

  // Render the component UI
  return (
    <div>
      <strong>This is a useEffect hook 👇</strong>
      <h1>Hello: {data}</h1>
      <button onClick={() => setRefresh(!refresh)}>Button refresh</button>
    </div>
  )
}

// Export the UseEffect component
export default UseEffect
