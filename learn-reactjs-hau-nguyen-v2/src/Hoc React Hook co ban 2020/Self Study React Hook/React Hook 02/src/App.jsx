import './App.css'
import LoginUseReducer from './compare hooks/UseStateAndUseReducer/UseReducer'
import LoginUseState from './compare hooks/UseStateAndUseReducer/UseState'
import UseEffect from './components/useEffect/UseEffect'
import CounterReducer from './components/useReducer/ExampleReducer'
import UseReducer from './components/useReducer/UseReducer'
import UseState from './components/useState/UseState'

function App() {
  return (
    <div>
      {/* Example useState */}
      <UseState />
      {/* Example useReducer */}
      <UseReducer />
      {/* Example useEffect */}
      <UseEffect />
      {/* Example useReducer */}
      <CounterReducer />
      {/* Comparing useState and useReducer */}
      <LoginUseState />
      <LoginUseReducer />
    </div>
  )
}

export default App
