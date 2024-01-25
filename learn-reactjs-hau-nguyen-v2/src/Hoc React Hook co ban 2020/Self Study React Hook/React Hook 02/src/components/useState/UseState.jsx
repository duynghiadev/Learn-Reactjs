import { useState } from 'react'

const UseState = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  return (
    <div id='usestate'>
      <strong>This is a useState hook</strong>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Click</button>
    </div>
  )
}

export default UseState
