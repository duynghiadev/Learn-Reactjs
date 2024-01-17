import { useEffect, useState } from 'react'
import PostList from './ExampleUseEffect3'

function PostListDetail() {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    async function fetchPostList() {
      // ...
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        console.log({ response })

        const { data } = responseJSON
        setPostList(data)
      } catch (error) {
        console.log('Failed to fetch posts:', error.message)
      }
    }

    console.log('POST list effect')
    fetchPostList()
  }, [])

  useEffect(() => {
    console.log('TODO list effect')
  })

  return (
    <div>
      <PostList posts={postList} />
    </div>
  )
}

export default PostListDetail
