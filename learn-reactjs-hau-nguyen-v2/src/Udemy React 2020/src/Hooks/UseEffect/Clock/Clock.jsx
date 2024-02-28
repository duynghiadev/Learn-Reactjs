import './Clock.scss'
import { useEffect, useState } from 'react'
import { formatDate } from './formatDate'

const Clock = () => {
  // Initialize with current time
  const [timeString, setTimeString] = useState(formatDate(new Date()))

  useEffect(() => {
    const clockInterval = setInterval(() => {
      // HH:MM:SS
      const now = new Date()
      const newTimeString = formatDate(now)
      setTimeString(newTimeString)
    }, 1000)

    // cleanup
    return () => {
      clearInterval(clockInterval)
    }
  }, [])

  return (
    <div className='clock'>
      <p className='clock__time'>{timeString}</p>
    </div>
  )
}

export default Clock
