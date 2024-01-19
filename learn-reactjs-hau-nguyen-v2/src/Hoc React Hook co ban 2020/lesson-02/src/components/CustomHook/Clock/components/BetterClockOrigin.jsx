import useClockOrigin from '../hooks/useClockOrigin'
import './BetterClockOrigin.scss'

function BetterClockOrigin() {
  const { timeString } = useClockOrigin()

  return (
    <div className='better-clock-origin'>
      <p className='better-clock-origin__time'>{timeString}</p>
    </div>
  )
}

export default BetterClockOrigin
