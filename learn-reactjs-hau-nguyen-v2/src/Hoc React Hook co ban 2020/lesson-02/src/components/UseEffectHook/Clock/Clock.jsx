import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ButtonShowHide from './ShowHideClock'

Clock.propTypes = {}

function Clock() {
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
      const newTimeString = formatDate(now)
      // HH:mm:ss
      setTimeString(newTimeString)
    }, 1000)

    return () => {
      // clean up
      console.log('Clean up')
      clearInterval(clockInterval)
    }
  }, [])

  return (
    <div>
      <h2>This clock is show</h2>
      <p style={{ fontSize: '42px' }}>{timeString}</p>
    </div>
  )
}

export default Clock
