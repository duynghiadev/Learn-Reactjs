import { useState } from 'react'
import './App.css'

const App = () => {
  let i = 0

  const [showMore, setShowMore] = useState(false)
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const handleIncreaseClick = () => {
    setCount(count + 1) // async func
    console.log('after setting count:', count) // old count
    i += 5
  }

  console.log({ count, i })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncreaseClick}>Increase count</button>

      {showMore && <p>{name}</p>}
    </div>
  )
}

export default App
