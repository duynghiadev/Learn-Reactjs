import useClockOrigin from '../hooks/useClockOrigin'
import './ClockOrigin.scss'

function ClockOrigin() {
  const { timeString } = useClockOrigin()

  return (
    <div>
      <p className='clock-origin'>{timeString}</p>
    </div>
  )
}

export default ClockOrigin
