import { useMemo, useState } from 'react'
import { fibonacci } from './Fibonacci'

const UseMemo = () => {
  const [green, setGreen] = useState(true)
  const [num, setNum] = useState(0)

  const handleClickColor = () => {
    setGreen(!green)
  }

  // Using useCallback here does not reduce redundant calculations
  const memorizedFib = useMemo(() => {
    return fibonacci(num)
  }, [num])

  return (
    <div>
      <h4 style={{ marginBottom: '20px' }}>This is a content of useMemo hook 🚀</h4>

      <h1 onClick={handleClickColor} style={{ color: green ? 'limegreen' : 'crimson' }}>
        UseMemo Example
      </h1>

      <h2>
        {/* memorized is a value, not a function */}
        Fibonacci of {num} is {memorizedFib}
      </h2>

      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  )
}

export default UseMemo
