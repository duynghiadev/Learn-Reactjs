import { useEffect, useState } from 'react'
import PostList from './PostList'

const PostAll = () => {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    async function fetchPostList() {
      // fetch data from api
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()

        const { data } = responseJSON
        setPostList(data)
      } catch (error) {
        console.log('Failed to fetch post list:', error.message)
      }
    }

    fetchPostList()
  }, [])

  return (
    <div>
      <h2>React Hooks - PostList</h2>
      <PostList posts={postList} />
    </div>
  )
}

export default PostAll
