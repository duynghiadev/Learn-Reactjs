/**
 * Certainly! Closures can be useful when working with asynchronous operations, such as making API calls. Here's a simple example using JavaScript and the fetch API:
 */
/**
 * In this example:
 *
 * The fetchData function takes a URL and initiates an asynchronous API call using the fetch API
 * It returns a function (getResult) which, when invoked later, will return the result of the API call
 * The getResult function is a closure because it "closes over" the data variable, which is declared in the outer fetchData function
 * Even though the API call is asynchronous and may take some time to complete, the closure ensures that we can access the result when needed.
 * This is a simplified example, and in real-world scenarios, you might want to handle asynchronous operations more elegantly using Promises or async/await. However, the concept of closures remains relevant in managing state across asynchronous operations.
 */
function fetchData(url) {
  let data = null // Variable to store the result of the API call

  const fetchDataPromise = fetch(url)
    .then((response) => response.json())
    .then((result) => {
      data = result
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })

  return function getResult() {
    // This inner function has access to the 'data' variable due to closure
    return data
  }
}

// Example usage:
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'
const getResultFunction = fetchData(apiUrl)

// getResultFunction is a closure that "remembers" the 'data' variable
// Even though the API call is asynchronous, we can access the result later
setTimeout(() => {
  const result = getResultFunction()
  console.log('result:', result) // Output: the data fetched from the API
}, 2000)
