import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.scss'
import Main from './components/Main/Main'
import UseState from './components/UseStateHook/UseState'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <div className='links'>
          <Link to='/'>
            Main <br />
          </Link>
          <Link to='/useState'>
            1. useState <br />
          </Link>
        </div>

        <Route path='/' exact component={Main} />
        <Route path='/useState' component={UseState} />
      </Router>
    </div>
  )
}

export default App
