/**
 * If you want to use the JSONPlaceholder API in a JavaScript IIFE example, you can fetch data from the API and perform some operations. JSONPlaceholder is a fake online REST API for testing and prototyping. Here's an example using the JSONPlaceholder API to fetch and display a list of posts:
 */
/**
 * In this example:
 *
 * - An IIFE is used to encapsulate the code
 *
 * - Inside the IIFE, there's a function fetchPosts that uses the fetch API to retrieve posts from the JSONPlaceholder API
 *
 * - The fetched posts are then logged to the console and displayed in an unordered list (ul) in the HTML body using the displayPosts function
 *
 * - The IIFE is immediately invoked at the end of the script, ensuring that the code runs as soon as the page loads
 *
 * - Make sure to replace the URL in the fetch function with the appropriate JSONPlaceholder API endpoint for the data you want to retrieve.
 */
;(function () {
  // Function to fetch and display posts
  function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        // Display posts in the console
        console.log('Fetched Posts:', posts)

        // Display posts in the HTML body
        displayPosts(posts)
      })
      .catch((error) => console.error('Error fetching posts:', error))
  }

  // Function to display posts in the HTML body
  function displayPosts(posts) {
    const postList = document.createElement('ul')

    posts.forEach((post) => {
      const listItem = document.createElement('li')
      listItem.textContent = post.title
      postList.appendChild(listItem)
    })

    document.body.appendChild(postList)
  }

  // Fetch and display posts immediately
  fetchPosts()
})()
