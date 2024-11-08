import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage.jsx'
import Header from './components/Header/index.jsx'
import NotFound from './components/NotFound'
import AlbumFeature from './features/Album'
import CartFeature from './features/Cart/index.jsx'
import ProductFeature from './features/Product/index.jsx'
import TodoFeature from './features/Todo'

function App() {
  return (
    <div className='App'>
      <Header />

      <Switch>
        <Redirect from='/home' to='/' exact />
        <Redirect from='/post-list/:postId' to='/post/:postId' exact />
        <Route path='/' component={HomePage} exact />
        <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} />
        <Route path='/products' component={ProductFeature} />
        <Route path='/cart' component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
