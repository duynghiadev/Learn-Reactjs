import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.scss'
import ColorBox from './components/ColorBox'
import ColorList from './components/ColorList/ColorList'
import HomePage from './components/Component life cycle/ComponentDidMount/HomePage'
import ResultComponent from './components/Component life cycle/ComponentDidUpdate/ResultComponent'
import CountdownParent from './components/Component life cycle/ComponentWillUnmount/CountdownParent'
import Counter from './components/Counter'
import Loading from './components/Loading/Loading'
import AlbumFeature from './features/Album'
import TodoFeature from './features/Todo'
import Home from './Home'
import ColorBoxVer2 from './Hooks/UseState/ColorBoxVer2/ColorBoxVer2'
import AllTodo from './Hooks/UseState/ManageTodoList/TodoList/AllTodo'
import PostAll from './Hooks/UseEffect/PostList/PostAll'
import ClockMain from './Hooks/UseEffect/Clock/ClockMain'
import Clock from './Hooks/CustomHooks/Clock/components/Clock'
import BetterClock from './Hooks/CustomHooks/BetterClock/components/BetterClock'
import MagicBox from './Hooks/CustomHooks/MagicBox/MagicBox'
import ReactMemo from './Hooks/ReactMemo/ReactMemo'
import UseRef from './Hooks/UseRef/UseRef'

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App__header'>
          <h1 className='App__title'>Hello React Udemy Hau Nguyen 2020</h1>
          <h2 className='App__subtitle'>
            Hello, my name is Duy Nghia. Currently, i'm studying ReactJS
          </h2>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/colorlist' element={<ColorList />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/todos' element={<TodoFeature />} />
          <Route path='/albums' element={<AlbumFeature />} />
          <Route path='/colorbox' element={<ColorBox />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/countdown' element={<CountdownParent />} />
          <Route path='/result' element={<ResultComponent />} />
          <Route path='/colorboxver2' element={<ColorBoxVer2 />} />
          <Route path='/todolist' element={<AllTodo />} />
          <Route path='/postlist' element={<PostAll />} />
          <Route path='/clock' element={<ClockMain />} />
          <Route path='/clockcustomhook' element={<Clock />} />
          <Route path='/betterclock' element={<BetterClock />} />
          <Route path='/magicbox' element={<MagicBox />} />
          <Route path='/reactmemo' element={<ReactMemo />} />
          <Route path='/useref' element={<UseRef />} />
          {/* Add a catch-all route for unmatched paths */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App