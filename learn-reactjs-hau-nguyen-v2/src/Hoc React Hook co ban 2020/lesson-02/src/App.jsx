import './App.scss'
import ExampleUseEffect from './components/UseEffectHook/ExampleUseEffect1'
import ExampleUseEffect2 from './components/UseEffectHook/ExampleUseEffect2'
import PostListDetail from './components/UseEffectHook/ExampleUseEffect4'
import PostFilterFormDetail from './components/UseEffectHook/ExampleUseEffect8'
import PaginationDetail from './components/UseEffectHook/ExampleUseEffect6'
import ColorBox3 from './components/UseStateHook/ColorBox3'
import ColorBox from './components/UseStateHook/ExampleColorBox/ColorBox'
import ColorBox2 from './components/UseStateHook/ExampleColorBox/ColorBox2'
import TodoList from './components/UseStateHook/ExampleColorBox/TodoList'
import TodoComponent from './components/UseStateHook/TodoList/TodoComponent'
import ButtonShowHide from './components/UseEffectHook/Clock/ShowHideClock'
import Main from './components/CustomHook/Clock/components/Main'
import MainOrigin from './components/CustomHook/Clock/components/MainOrigin'
import MagicBox from './components/CustomHook/Clock/components/MagicBox/MagicBox'
import HeroMain from './components/ReactMemo/HeroMain'
import Counter from './components/UseRefHook/UseRefHook'

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
      <ExampleUseEffect />
      <ExampleUseEffect2 />
      <hr />
      <PostListDetail />
      <hr />
      <PaginationDetail />
      <hr />
      <PostFilterFormDetail />
      <hr />
      <ButtonShowHide />
      <hr />
      <Main />
      <hr />
      <MainOrigin />
      <hr />
      <MagicBox />
      <hr />
      <HeroMain />
      <hr />
      <Counter />
      <hr />
    </div>
  )
}

export default App
