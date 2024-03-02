/**
 * Explanation:
 *
 * console.log("Start"): This is the start of the synchronous code execution. It will be pushed onto the call stack.
 *
 * fetchData(): This asynchronous function is called. The fetch function initiates an HTTP request. Since fetch is asynchronous, it doesn't block the main thread, and the control is returned immediately.
 *
 * The event loop allows the main thread to continue with the next synchronous task.
 *
 * console.log("End"): This is pushed onto the call stack, and it gets executed while the HTTP request is in progress.
 *
 * Meanwhile, the HTTP request is handled by the Web API. When the request is complete, a callback is added to the callback queue.
 *
 * The event loop checks the callback queue. If there are any callbacks, it moves them to the call stack.
 *
 * The callback function containing the response handling code is executed. In this case, it logs the data to the console.
 *
 * If there are more tasks in the callback queue, the event loop continues to process them.
 *
 * This example demonstrates how the event loop, Web APIs, and the callback queue work together to handle asynchronous operations in JavaScript. Understanding this flow is crucial for building responsive and non-blocking applications.
 */

console.log('Start')

// Asynchronous function using Fetch API
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log('Data:', data)
  } catch (error) {
    console.error('Error:', error)
  }
}

// Execute the asynchronous function
fetchData()

console.log('End')
