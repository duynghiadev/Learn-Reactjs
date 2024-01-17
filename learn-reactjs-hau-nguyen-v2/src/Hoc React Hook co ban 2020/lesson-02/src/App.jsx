import './App.scss'
import ColorBox3 from './components/UseStateHook/ColorBox3'
import ColorBox from './components/UseStateHook/ExampleColorBox/ColorBox'
import ColorBox2 from './components/UseStateHook/ExampleColorBox/ColorBox2'
import TodoList from './components/UseStateHook/ExampleColorBox/TodoList'
import TodoComponent from './components/UseStateHook/TodoList/TodoComponent'

function App() {
  return (
    <div className='app'>
      <h2>Welcome to React Hook</h2>
      <ColorBox />
      <ColorBox2 />
      <TodoList />
      <hr />
      <ColorBox3 />
      <hr />
      <TodoComponent />
      <hr />
    </div>
  )
}

export default App
