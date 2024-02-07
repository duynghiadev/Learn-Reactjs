import { useCallback, useEffect, useState } from 'react'
import fib from './FibonacciExpression'
import ExpensiveComputationComponent from './ExpensiveComputation'

const UseCallback = () => {
  const [time, setTime] = useState(new Date())
  const [count, setCount] = useState(1)

  // Persistent references do not cause frequent re-renders of child components
  const memoizedFib = useCallback(fib, []) // Pure parameter passing form without adding dependencies

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: 'red' }}>
        This is a content of <code>useCallback</code> hook 🚀
      </h2>

      <h3>useCallback Example: {time.toLocaleTimeString()}</h3>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <ExpensiveComputationComponent compute={memoizedFib} count={count} />
    </div>
  )
}

export default UseCallback
