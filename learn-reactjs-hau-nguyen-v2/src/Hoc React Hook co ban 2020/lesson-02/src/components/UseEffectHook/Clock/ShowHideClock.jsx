import { useState } from 'react'
import Clock from './Clock'

function ButtonShowHide() {
  const [showClock, setShowClock] = useState(true)

  function toggleClock() {
    setShowClock(!showClock)
  }

  return (
    <div>
      {showClock ? <Clock /> : <h2>The clock is hidden</h2>}
      <button onClick={toggleClock}>{showClock ? 'Hide Clock' : 'Show Clock'}</button>
    </div>
  )
}

export default ButtonShowHide
