import './App.css'
import ColorBox from './components/ColorBox'
import ColorList from './components/ColorList/ColorList'
import HomePage from './components/Component life cycle/ComponentDidMount/HomePage'
import ResultComponent from './components/Component life cycle/ComponentDidUpdate/ResultComponent'
import CountdownParent from './components/Component life cycle/ComponentWillUnmount/CountdownParent'
import Couter from './components/Counter'
import Loading from './components/Loading/Loading'
import AlbumFeature from './features/Album'
import TodoFeature from './features/Todo'

function App() {
  return (
    <div>
      <h1>Hello React Udemy Hau Nguyen 2020</h1>
      <h2>Hello, my name is Duy Nghia. Currently, i'm studying ReactJS</h2>
      <hr />
      <ColorList />
      <hr />
      <Loading />
      <hr />
      <TodoFeature />
      <br />
      <hr />
      <AlbumFeature />
      <hr />
      <ColorBox />
      <hr />
      <Couter />
      <hr />
      <HomePage />
      <br />
      <hr />
      <CountdownParent />
      <br />
      <hr />
      <ResultComponent />
      <br />
      <hr />
    </div>
  )
}

export default App
