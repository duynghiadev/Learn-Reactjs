import { useEffect, useState } from 'react'

function useClockOrigin() {
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date()
      // HH:MM:SS
      const newTimeString =
        `0${date.getHours()}`.slice(-2) +
        ':' +
        `0${date.getMinutes()}`.slice(-2) +
        ':' +
        `0${date.getSeconds()}`.slice(-2)

      setTimeString(newTimeString)
    }, 1000)

    return () => {
      console.log('clean up in components Clock')
      clearInterval(clockInterval)
    }
  }, [])

  return {
    timeString
  }
}

export default useClockOrigin
