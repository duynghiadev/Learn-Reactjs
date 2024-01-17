import './App.scss'
import ColorBox3 from './components/ColorBox3'
import ColorBox from './components/ExampleColorBox/ColorBox'
import ColorBox2 from './components/ExampleColorBox/ColorBox2'
import TodoList from './components/ExampleColorBox/TodoList'
import TodoComponent from './components/TodoList/TodoComponent'

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
