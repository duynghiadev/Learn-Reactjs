import './Clock.scss'
import { useEffect, useState } from 'react'
import { formatDate } from './formatDate'

const Clock = () => {
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date()
      // HH:MM:SS
      const newTimeString = formatDate(now)

      setTimeString(newTimeString)
    }, 1000)

    return () => {
      // cleanup
      console.log('Clock cleanup')
      clearInterval(clockInterval)
    }
  }, [])

  return (
    <div>
      <p style={{ fontSize: '42px' }}>{timeString}</p>
    </div>
  )
}

export default Clock
