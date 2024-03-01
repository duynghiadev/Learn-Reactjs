import { useEffect, useRef, useState } from 'react'
import './UseRef.scss'

const UseRefMain = () => {
  // 1
  const [count, setCount] = useState(0)
  const prevCount = useRef(count)

  // 3
  useEffect(() => {
    prevCount.current = count
  }, [count])

  const handleIncreaseClick = () => {
    setCount((x) => x + 1)
  }

  // 2
  return (
    <div className='use-ref'>
      <p className='use-ref__previous'>Previous: {prevCount.current}</p>
      <p className='use-ref__current'>Current: {count}</p>

      <div className='use-ref__button-container'>
        <button onClick={handleIncreaseClick} className='use-ref__button'>
          Increase
        </button>
      </div>
    </div>
  )
}

export default UseRefMain
