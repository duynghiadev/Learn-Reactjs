import { useEffect, useState } from 'react'

/**
  - Execution order:

    MOUNTING
  - rendering
  - run useEffect()

  UPDATING
  - rendering
  - run `useEffect() cleanup` nếu dependencies thay đổi.
  - run `useEffect()` nếu dependencies thay đổi.

  UNMOUNTING
  - run `useEffect() cleanup`.
 */

function ExampleUseEffect() {
  // Executed before each render
  const [color, setColor] = useState('red')

  // Executed after each render
  useEffect(() => {
    // do your side here...

    return () => {
      // clean up here...
      // Executed before the next render or unmount
    }
  }, [])

  // rendering
  return (
    <div>
      <h2>This is a template pattern useEffect</h2>
    </div>
  )
}

export default ExampleUseEffect
