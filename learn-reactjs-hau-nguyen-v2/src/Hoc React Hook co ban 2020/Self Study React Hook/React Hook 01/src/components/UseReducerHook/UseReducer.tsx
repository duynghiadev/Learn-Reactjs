import { useReducer } from 'react'
import { initialState, reducer } from './reducer/reducer'

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('reducer in component UseReducer:', reducer)
  console.log('initialState in component UseReducer:', initialState)

  return (
    <div>
      <h1 style={{ color: `rgb(${state.red}, ${state.green}, ${state.blue})` }}>
        useReducer Example
      </h1>

      <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>

      {/* Button Addition and Button Subtraction handle for event color Red */}
      <div>
        <span>Red</span>
        <button
          onClick={() => {
            dispatch({ type: 'UP_RED' })
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            dispatch({ type: 'DOWN_RED' })
          }}
        >
          -
        </button>
      </div>

      {/* Button Addition and Button Subtraction handle for event color Green */}
      <span>Green</span>
      <button
        onClick={() => {
          dispatch({ type: 'UP_GREEN' })
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'DOWN_GREEN' })
        }}
      >
        -
      </button>

      {/* Button Addition and Button Subtraction handle for event color Blue */}
      <span>Blue</span>
      <button
        onClick={() => {
          dispatch({ type: 'UP_BLUE' })
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'DOWN_BLUE' })
        }}
      >
        -
      </button>
    </div>
  )
}

export default UseReducer
