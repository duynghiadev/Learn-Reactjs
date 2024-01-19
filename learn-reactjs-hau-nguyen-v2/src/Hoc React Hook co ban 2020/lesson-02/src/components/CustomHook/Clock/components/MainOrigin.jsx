import { useState } from 'react'
import BetterClockOrigin from './BetterClockOrigin'
import ClockOrigin from './ClockOrigin'
import './MainOrigin.scss'

function MainOrigin() {
  const [showClock, setShowClock] = useState(true)

  const toggleClock = () => {
    setShowClock(!showClock)
  }

  return (
    <div className={`button-show-hide-container ${showClock ? 'show' : 'hide'}`}>
      <h1>There are two components have using Custom Hook 👉 Part 2 👈</h1>

      {showClock ? (
        <div className='clock-components'>
          <ClockOrigin />
          <BetterClockOrigin />
        </div>
      ) : (
        <h2 className='hidden-message'>The clock is hidden</h2>
      )}

      <button className='toggle-button' onClick={toggleClock}>
        {showClock ? 'Hide Clock' : 'Show Clock'}
      </button>
    </div>
  )
}

export default MainOrigin
