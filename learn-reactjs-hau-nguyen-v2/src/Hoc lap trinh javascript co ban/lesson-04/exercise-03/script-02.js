// file này là mình custom code từ file script.js 🤷‍♀️
// file này thì mình mô phỏng (simulate) token chưa hết hạn

// Here's a custom piece of code that integrates with the JSONPlaceholder API, simulating token expiration and refreshing using the provided structure:

/**
 * In this example, the requestApi function simulates fetching data from the JSONPlaceholder API. The main function demonstrates making three requests to different endpoints asynchronously. The code checks if the token is expired and refreshes it if necessary before making each API request. The fetching of data is simulated using the fetch function with the JSONPlaceholder API URLs.
 */

// Simulate token expiration
const isTokenExpired = false
let token = 'Current token' // Usually stored in local storage

const refreshToken = (url) => {
  console.log('Refresh token url: ', url)

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('\n')
      resolve('Yes, this is a new token 😎')
    }, 3000)
  })
}

// Closure: to save the refreshTokenRequest
let refreshTokenRequest = null
const requestApi = async (url) => {
  if (isTokenExpired) {
    console.log('requestApi: Ooops ... token expired: ', url, token)

    refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : refreshToken(url)

    const newToken = await refreshTokenRequest

    // Reset token request for the next expiration
    refreshTokenRequest = null

    token = newToken // Usually update token in localStorage
    console.log('requestApi: Fetch data with new token: ', url, token)
    return
  }

  console.log('Fetch data 👉: ', url, token)

  // Simulate fetching data from JSONPlaceholder
  const response = await fetch(`https://jsonplaceholder.typicode.com${url}`)
  const data = await response.json()

  console.log('Data fetched 🔍:', data)
  console.log('----------------------------')
}

// ---------------
// MAIN LOGIC
// ---------------
const main = async () => {
  // Example: 3 requests coming from different parts of your app
  // You can't know which one runs first or last, and you also can't know which one should wait for the other
  await requestApi('/posts/1')
  await requestApi('/comments/1')
  await requestApi('/users/1')
}

main()
