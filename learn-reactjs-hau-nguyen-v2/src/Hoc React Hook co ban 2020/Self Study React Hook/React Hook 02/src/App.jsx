import './App.css'
import UseEffect from './components/useEffect/UseEffect'
import CounterReducer from './components/useReducer/ExampleReducer'
import UseReducer from './components/useReducer/UseReducer'
import UseState from './components/useState/UseState'

function App() {
  return (
    <div>
      <UseState />
      <UseReducer />
      <UseEffect />
      <CounterReducer />
    </div>
  )
}

export default App
