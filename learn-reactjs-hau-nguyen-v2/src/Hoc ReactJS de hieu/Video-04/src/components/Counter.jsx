import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function Counter(props) {
  // 1
  const [count, setCounter] = useState(0)
  const prevCount = useRef(count)

  console.log('count:', count)
  console.log('prevCount before:', prevCount)

  // 3
  useEffect(() => {
    prevCount.current = count
    console.log('prevCount after:', prevCount)
  }, [count])

  // 2
  const handleIncreaseClick = () => {
    setCounter((x) => x + 1)
  }

  return (
    <div>
      <p>Previous: {prevCount.current}</p>
      <p>Current: {count}</p>

      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
      </div>
    </div>
  )
}

export default Counter
