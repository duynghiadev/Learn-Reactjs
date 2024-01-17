import { useEffect, useRef, useState } from 'react'

function ExampleUseEffect2() {
  const [filters, setFilters] = useState()

  useEffect(() => {
    // EVERY
    // No dependencies defined
    // Always execute after every render

    return () => {
      // Execute before the next effect or unmount.
    }
  })

  useEffect(() => {
    // ONCE
    // Empty dependencies
    // Only execute once after the FIRST RENDER

    return () => {
      // Execute once when unmount
    }
  }, [])

  useEffect(() => {
    // On demand
    // Has dependencies
    // Only execute after the first RENDER or filters state changes

    return () => {
      // Execute before the next effect or unmount.
    }
  }, [filters])

  const [timeString, setTimeString] = useState(null)
  const intervalRef = useRef(null)
  const [postList, setPostList] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=10`
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        const { data, pagination } = responseJSON

        console.log({ data, pagination })
        setPostList(data)
      } catch (error) {
        console.log('Failed to fetch posts: ', error.message)
      }
    }

    fetchData()
  }, [])

  // Use useEffect hook with cleanup 🚀
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = new Date()
      const hours = `0${now.getHours()}`.slice(-2)
      const minutes = `0${now.getMinutes()}`.slice(-2)
      const seconds = `0${now.getSeconds()}`.slice(-2)
      const currentTimeString = `${hours}:${minutes}:${seconds}`

      setTimeString(currentTimeString)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <div style={{ fontSize: '48px' }}>{timeString}</div>
      <hr />
      <div>
        Post list length: {postList.length} 👨‍💻
        {postList && postList.map((post) => <li key={post.id}>{post.title}</li>)}
      </div>
    </div>
  )
}

export default ExampleUseEffect2
