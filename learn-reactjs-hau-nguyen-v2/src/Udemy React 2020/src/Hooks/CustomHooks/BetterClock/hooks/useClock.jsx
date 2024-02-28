import { useEffect, useState } from 'react'
import { formatDate } from '../formatDate'

const useClock = () => {
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
      console.log('cleanup')
      clearInterval(clockInterval)
    }
  }, [])

  return { timeString }
}

export default useClock
