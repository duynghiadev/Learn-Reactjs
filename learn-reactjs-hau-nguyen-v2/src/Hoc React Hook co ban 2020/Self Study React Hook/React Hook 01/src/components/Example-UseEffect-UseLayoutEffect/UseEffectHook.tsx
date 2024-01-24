import { useEffect, useState } from 'react'

/**
 * - The providerd component, when executed, cause the page to display a series of random number upon clicking the div. If you continuously click, you'll notice that the numbers flicker. The reason behind this behavior is that each time you click the div, count is updated to 0, and then within the useEffect, it's set to a series of random number again.
 *
 * - Therefore, the page first renders 0, then quickly render the random numbers. Due to the rapid updates, the flickering effect occurs.
 */
const UseEffectHook = () => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if (count === 0) {
      const randomNum: number = 10 + Math.random() * 200
      setCount(randomNum)
    }
  }, [count])

  return (
    <div>
      <h2>This is useEffect hook</h2>
      <h5 onClick={() => setCount(0)}>{count}</h5>
    </div>
  )
}

export default UseEffectHook
