import axios from 'axios'
import { useEffect, useState, useMemo } from 'react'

const UseMemo = () => {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10').then((response) => {
      setData(response.data)
    })
  }, [])

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

  const getLongestName = useMemo(() => {
    return findLongestName(data)
  }, [toggle])

  return (
    <div className='App'>
      <strong>This is a useMemo hook 👇</strong>
      <div>{getLongestName}</div>
      <button
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default UseMemo
