import './App.scss'
import ColorBox from './components/ColorBox'
import ColorBox2 from './components/ColorBox2'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className='app'>
      <h2>Welcome to React Hook</h2>
      <ColorBox />
      <ColorBox2 />
      <TodoList />
    </div>
  )
}

export default App
