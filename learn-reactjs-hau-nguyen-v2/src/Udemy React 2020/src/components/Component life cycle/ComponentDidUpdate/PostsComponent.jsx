import React, { Component } from 'react'

class PostsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const limitedData = data.slice(0, 5)
        this.setState({ posts: limitedData })
      })
      .catch((error) => console.error('Error fetching data:', error))
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      console.log('Posts updated:', this.state.posts)
    }
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        <h2>Posts Component</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default PostsComponent
