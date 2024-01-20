import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
import Main from './components/Main/Main'
import UseState from './components/UseStateHook/UseState'
import UseReducer from './components/UseReducerHook/UseReducer'
import Redirect from './Redirect/RedirectLink'

const App = () => {
  return (
    <div className='App'>
      <Router>
        {/* This place contains the link */}
        <Redirect />
        <hr />

        {/* This place contains the component */}
        <h3 style={{ marginBottom: '20px', color: 'blue' }}>
          🎭 This is a content respectively for each link 🎭
        </h3>

        <Route path='/' exact component={Main} />
        <Route path='/useState' component={UseState} />
        <Route path='/useReducer' component={UseReducer} />
      </Router>
    </div>
  )
}

export default App
