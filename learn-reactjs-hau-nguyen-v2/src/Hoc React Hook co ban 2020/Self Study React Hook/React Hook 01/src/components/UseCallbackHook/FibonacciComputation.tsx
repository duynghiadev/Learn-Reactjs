import { useEffect } from 'react'

interface FibonacciComputationProps {
  compute: Function
  count: number
}

const FibonacciComputation = ({ compute, count }: FibonacciComputationProps) => {
  useEffect(() => {
    console.log('finish process render')
  }, [count])

  return (
    <div>
      <h1>
        Fibonacci for {count} is {compute(count)}
      </h1>
      <p>👇</p>
      <h4>last render {new Date().toLocaleTimeString()}</h4>
    </div>
  )
}

export default FibonacciComputation
