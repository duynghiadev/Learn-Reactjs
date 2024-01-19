import { useEffect, useState } from 'react'

function useClock() {
  const [timeString, setTimeString] = useState('')

  function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)

    return `${hours}:${minutes}:${seconds}`
  }

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date()
      // HH:MM:SS
      const newTimeString = formatDate(now)

      setTimeString(newTimeString)
    }, 1000)

    return () => {
      // clean up
      console.log('clean up')
      clearInterval(clockInterval)
    }
  })

  return {
    timeString
  }
}

export default useClock
