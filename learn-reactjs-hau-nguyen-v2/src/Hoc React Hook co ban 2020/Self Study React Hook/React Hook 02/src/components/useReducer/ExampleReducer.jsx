import { useReducer } from 'react'

const initialState = {
  count: 0
}

// The reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    case 'reset':
      return {
        count: (state.count = 0)
      }
    default:
      return {
        count: state.count
      }
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: {state.count}
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default CounterReducer
