import { Switch, NavLink, Route } from 'react-router-dom'
import './App.css'
import TodoFeature from './features/Todo'
import AlbumFeature from './features/Album'

function App() {
  return (
    <div className='App'>
      Header
      <p>
        <NavLink to='/todos'>Todos</NavLink>
      </p>
      <p>
        <NavLink to='/albums'>Albums</NavLink>
      </p>
      <Switch>
        <Route path='/' component={TodoFeature} exact />
        <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} />
      </Switch>
      Footer
    </div>
  )
}

export default App
