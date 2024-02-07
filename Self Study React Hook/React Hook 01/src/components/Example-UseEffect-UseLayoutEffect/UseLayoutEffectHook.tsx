import { useLayoutEffect, useState } from 'react'

/**
 * - The flickering disappeared
 * + Compare to using useEffect, when you click the div and count is update to 0, the page does not immediately render. Instead, it waits for the internal state modification in useLayoutEffect before updating the page. Therefore, the page doesn't flicker
 *
 * - Summary:
 * + useLayoutEffect can solve some scenarios of page flickering by synchronously excuting state updates.
 * + useEffect is suitable for 99% of scenarios, and useLayoutEffect may block rendering, so use it cautiously.
 */
const UseLayoutEffectExampleFirst: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  useLayoutEffect(() => {
    if (count === 0) {
      const randomNum: number = 10 + Math.random() * 200
      setCount(randomNum)
    }
  }, [count])

  return (
    <div>
      <h1>This is a useLayoutEffect hook</h1>
      <br />
      <p>In this example, value count not render, so it not flickering </p>
      <h5 onClick={() => setCount(0)}>{count}</h5>
    </div>
  )
}

export default UseLayoutEffectExampleFirst
