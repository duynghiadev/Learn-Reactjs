import FilterableList from '@/198. Filter List/FilterListList'
import { useState } from 'react'
import './App.css'

let run = 0
function calculateCount() {
  run += 5
  console.log('calc count:', run)
  return 10
}

const App = () => {
  let i = 0

  const [showMore, setShowMore] = useState(false)
  const [count, setCount] = useState(calculateCount)
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
      <br />
      <br /> <hr /> <br />
      <FilterableList />
    </div>
  )
}

export default App
