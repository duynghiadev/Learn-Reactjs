import { useState } from 'react'
import Clock from './Clock'
import './ShowHideClock.scss' // Import your SCSS file

function ButtonShowHide() {
  const [showClock, setShowClock] = useState(true)

  function toggleClock() {
    setShowClock(!showClock)
  }

  return (
    <div className={`button-show-hide-container ${showClock ? 'show' : 'hide'}`}>
      {showClock ? <Clock /> : <h2 className='hidden-message'>The clock is hidden</h2>}

      <button className='toggle-button' onClick={toggleClock}>
        {showClock ? 'Hide Clock' : 'Show Clock'}
      </button>
    </div>
  )
}

export default ButtonShowHide
