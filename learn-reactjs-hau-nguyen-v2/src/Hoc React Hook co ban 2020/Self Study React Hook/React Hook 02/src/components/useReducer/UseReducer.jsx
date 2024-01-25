import { useReducer } from 'react'
import { initial, reducer } from './reducer'

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initial)

  console.log(
    'state in function UseReducer:',
    state,
    '👉 dispatch in function UseReducer:',
    typeof dispatch
  )

  return (
    <div id='usereducer'>
      <strong>This is a useReducer</strong>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'Increment' })
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'ToggleText' })
        }}
      >
        Toggle Text
      </button>

      {state.showText && <p>This is a toggle text</p>}
    </div>
  )
}

export default UseReducer
