/**
 * - You can refactor the code to make it more maintainable and readable. One way to achieve this is by separating the logic into functions and using async/await for better readability. Here's an example:
 *
 * - This way, the code is more modular, and each function has a specific responsibility, making it easier to maintain and understand.
 */
import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

const fetchComments = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
    return response.data
  } catch (error) {
    console.error('Error fetching comments:', error)
    return null
  }
}

const findLongestName = (comments) => {
  console.log('comments:', comments)
  if (!comments) return null

  let longestName = ''
  for (let i = 0; i < comments.length; i++) {
    let currentName = comments[i].name
    if (currentName.length > longestName.length) {
      console.log('currentName:', currentName, '👉 currentName.length:', currentName.length)
      console.log('longestName:', longestName, '👉 longestName.length:', longestName.length)

      longestName = currentName
    }
  }

  console.log('THIS WAS COMPUTED')
  return longestName
}

const UseMemoModify = () => {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const comments = await fetchComments()
      setData(comments)
    }

    fetchData()
  }, [])

  const getLongestName = useMemo(() => {
    return findLongestName(data)
  }, [toggle])

  return (
    <div className='App'>
      <strong>This is a useMemo hook 👇</strong>
      <div>{getLongestName}</div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default UseMemoModify
