import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
import Main from './components/Main/Main'
import UseState from './components/UseStateHook/UseState'
import UseReducer from './components/UseReducerHook/UseReducer'
import Redirect from './Redirect/RedirectLink'
import UseMemo from './components/UseMemoHook/UseMemoHook'
import UseCallback from './components/UseCallbackHook/UseCallbackHook'
import UseRef from './components/UseRefHook/UseRef'
import UseLayoutEffect from './components/UseLayoutEffectHook/UseLayoutEffect'
import UseLayoutEffectExample from './components/UseLayoutEffectHook/UseLayoutEffectExample'
import UseContext from './components/UseContextHook/UseContext'
import UseImporativeHandle from './components/UseImperativeHandleHook/UseImporativeHandle'
import UseLayoutEffectExampleFirst from './components/Example-UseEffect-UseLayoutEffect/UseLayoutEffectHook'
import UseEffectHook from './components/Example-UseEffect-UseLayoutEffect/UseEffectHook'

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
        <Route path='/useMemo' component={UseMemo} />
        <Route path='/useCallback' component={UseCallback} />
        <Route path='/useRef' component={UseRef} />
        <Route path='/useLayoutEffect' component={UseLayoutEffect} />
        <Route path='/useLayoutEffect-1' component={UseLayoutEffectExample} />
        <Route path='/examplefromfilemarkdown-1' component={UseLayoutEffectExampleFirst} />
        <Route path='/examplefromfilemarkdown-2' component={UseEffectHook} />
        <Route path='/useContext' component={UseContext} />
        <Route path='/useImporativeHandle' component={UseImporativeHandle} />
      </Router>
    </div>
  )
}

export default App
