import { Route } from 'react-router-dom'
import './App.css'
import TodoFeature from './features/Todo'
import AlbumFeature from './features/Album'

function App() {
  return (
    <div className='App'>
      Header
      <Route path='/todos' component={TodoFeature} />
      <Route path='/albums' component={AlbumFeature} />
      Footer
    </div>
  )
}

export default App
