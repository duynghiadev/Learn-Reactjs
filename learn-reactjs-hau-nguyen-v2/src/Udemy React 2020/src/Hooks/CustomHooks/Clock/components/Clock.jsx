import useClock from '../hooks/useClock'

const Clock = () => {
  const { timeString } = useClock()

  return (
    <div>
      <p style={{ fontSize: '42px' }}>{timeString}</p>
    </div>
  )
}

export default Clock
