import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './counterSlice.js'

const CounterFeature = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter)

  const handleIncreaseClick = () => {
    const action = increase() // action creator
    dispatch(action)
  }

  const handleDecreaseClick = () => {
    const action = decrease() // action creator
    dispatch(action)
  }

  return (
    <div>
      Counter: {count}

      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  )
}

export default CounterFeature
