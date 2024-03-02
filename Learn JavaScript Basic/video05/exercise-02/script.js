console.log('Start')

const fetchData = async () => {
  try {
    // Fetch data from an external API (JSONPlaceholder)
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todoData = await response.json()

    console.log('Fetched Data:', todoData)

    // Simulate additional asynchronous task (e.g., processing data)
    const processedData = await processTodoData(todoData)

    console.log('Processed Data:', processedData)

    // Simulate another asynchronous task (e.g., posting data to a server)
    const postResponse = await postData(processedData)
    console.log('Post Response:', postResponse)
  } catch (error) {
    console.error('Error:', error)
  }
}

const processTodoData = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = {
        id: data.id,
        title: data.title.toUpperCase(),
        completed: !data.completed
      }
      resolve(processedData)
    }, 1000)
  })
}

const postData = async (data) => {
  // Simulate posting data to a server (you might use fetch or another API here)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Data posted successfully' })
    }, 1500)
  })
}

// Execute the asynchronous function
fetchData()

console.log('End')
