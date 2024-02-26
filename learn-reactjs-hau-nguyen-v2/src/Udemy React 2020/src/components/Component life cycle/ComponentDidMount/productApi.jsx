// productApi.js
const productApi = {
  getAll: async (limit = 5) => {
    // Example implementation fetching product list from an API
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    return response.json()
  }
}

export { productApi }
