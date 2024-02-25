import './App.css'
import ColorBox from './components/ColorBox'
import ColorList from './components/ColorList/ColorList'
import Couter from './components/Couter'
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
      <hr />
      <AlbumFeature />
      <hr />
      <ColorBox />
      <hr />
      <Couter />
      <hr />
    </div>
  )
}

export default App
