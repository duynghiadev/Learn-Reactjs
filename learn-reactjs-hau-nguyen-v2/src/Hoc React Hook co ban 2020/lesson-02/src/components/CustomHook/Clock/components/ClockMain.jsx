import useClock from '../hooks/useClock'

function ClockMain() {
  const { timeString } = useClock()

  return (
    <div className='clock-main'>
      <p style={{ fontSize: '42px' }}>{timeString}</p>
    </div>
  )
}

export default ClockMain
