import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true)
        const response = await axios.get(url)
        if (response.status === 200) {
          setData(response.data)
        }
      } catch (error) {
        throw error
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { loading, data }
}

function EffectsDemoCustomHook1() {
  const { loading, data } = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div className='App'>
      {loading && <div className='loader' />}
      {data?.length > 0 && data.slice(0, 5).map((blog) => <p key={blog.id}>{blog.title}</p>)}
    </div>
  )
}

export default EffectsDemoCustomHook1
