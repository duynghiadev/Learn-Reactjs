Let's take a more advanced example where we fetch data from an external API, process it, and then perform additional asynchronous operations. We'll use the JSONPlaceholder API for simplicity. In this example, we'll use async/await for handling promises and demonstrate how to deal with multiple asynchronous tasks.

```js
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
```

In this example:

- `fetchData` fetches data from JSONPlaceholder, then processes the data and posts it to a server (simulated by `processTodoData` and `postData` functions).

- `processTodoData` simulates processing the fetched data asynchronously, such as transforming or manipulating it.

- `postData` simulates an additional asynchronous task, like posting the processed data to a server.

- The `async/await` syntax is used to handle asynchronous code in a more synchronous-looking manner. The functions `processTodoData` and `postData` return promises, and `await` is used to wait for these promises to resolve before moving on to the next steps.

This example showcases the handling of multiple asynchronous tasks and demonstrates how the event loop processes them sequentially.
