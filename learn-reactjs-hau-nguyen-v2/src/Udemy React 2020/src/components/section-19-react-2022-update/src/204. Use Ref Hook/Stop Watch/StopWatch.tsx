import React, { useRef, useState } from 'react'
import './StopWatch.scss' // Import SCSS file

const StopWatch: React.FC = () => {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [now, setNow] = useState<number | null>(null)
  const intervalRef = useRef<number | null>(null)

  const handleStart = () => {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current!)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  const handleStop = () => {
    clearInterval(intervalRef.current!)
  }

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <div className='stopwatch-container'>
      <hr />
      <h1 className='time-passed'>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button className='start-button' onClick={handleStart}>
        Start
      </button>
      <button className='stop-button' onClick={handleStop}>
        Stop
      </button>
    </div>
  )
}

export default StopWatch
