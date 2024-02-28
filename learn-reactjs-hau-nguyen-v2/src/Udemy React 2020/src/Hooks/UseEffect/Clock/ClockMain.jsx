import { useState } from 'react'
import Clock from './Clock'
import './ClockMain.scss'

const ClockMain = () => {
  const [showClock, setShowClock] = useState(true)

  return (
    <div>
      <h2>React Hooks - Clock</h2>
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </div>
  )
}

export default ClockMain
