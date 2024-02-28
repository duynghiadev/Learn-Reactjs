import React, { useState } from 'react'
import useClock from '../hooks/useClock'
import './BetterClock.scss'

const BetterClock = () => {
  const { timeString } = useClock()
  const [isClockVisible, setIsClockVisible] = useState(true)

  const toggleClockVisibility = () => {
    setIsClockVisible(!isClockVisible)
  }

  return (
    <div className='better-clock'>
      {isClockVisible && <p className='better-clock__time'>{timeString}</p>}
      <button
        className={`better-clock__toggle ${isClockVisible ? 'visible' : 'hidden'}`}
        onClick={toggleClockVisibility}
      >
        {isClockVisible ? 'Hide Clock' : 'Show Clock'}
      </button>
    </div>
  )
}

export default BetterClock
