import { useState } from 'react'
import Clock from './Clock'
import './ClockMain.scss'

const ClockMain = () => {
  const [showClock, setShowClock] = useState(true)

  return (
    <div className='clock-main'>
      <h2 className='clock-main__title'>React Hooks - Clock</h2>
      {showClock && <Clock />}
      <button className='clock-main__button' onClick={() => setShowClock(!showClock)}>
        {showClock ? 'Hide Clock' : 'Show Clock'}
      </button>
    </div>
  )
}

export default ClockMain
