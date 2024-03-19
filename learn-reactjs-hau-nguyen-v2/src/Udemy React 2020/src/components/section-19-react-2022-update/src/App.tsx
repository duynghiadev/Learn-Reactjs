import FilterableList from '@/198. Filter List/FilterListList'
import Preserving from '@/199. Preserving State/component01/Preverving'
import ShowCounterPreserving from '@/199. Preserving State/component02/ShowCounterPreserving'
import ShowCounterPreserving2 from '@/199. Preserving State/component03/ShowCounterPreserving2'
import Scoreboard from '@/200. Resetting State/component01/ScoreBoard'
import Scoreboard2 from '@/200. Resetting State/component02/ScoreBoard2'
import { DisappearingInput } from '@/201. Disappearing Input Text/DisappearingInput'
import SwapTwoForm from '@/202. Swap Two Form/SwapTwoForm'
import Gallery from '@/203. Reset Form/Clear Image While Loading/Gallery'
import ContactList from '@/203. Reset Form/Fix Misplaced/ContactList'
import ContactManager from '@/203. Reset Form/Reset A Detail Form/ContactManager'
import ClickCounter from '@/204. Use Ref Hook/Click Counter/ClickCounter'
import Form from '@/204. Use Ref Hook/Focus Text Input/Form'
import VideoPlayer from '@/204. Use Ref Hook/Play And Pause Video/VideoPlayer'
import CatFriends from '@/204. Use Ref Hook/Scrolling Images/CatFriends'
import StopWatch from '@/204. Use Ref Hook/Stop Watch/StopWatch'
import Chat from '@/206. Fix Broken Input/Fix Broken Chat Input/Chat'
import Toggle from '@/206. Fix Broken Input/Fix Component/Toggle'
import Dashboard from '@/206. Fix Broken Input/Fix Debouncing/Dashboard'
import ReadState from '@/206. Fix Broken Input/Read The Latest State/ReadState'
import { useState } from 'react'
import './App.css'

let run = 0
function calculateCount() {
  run += 5
  console.log('calc count:', run)
  return 10
}

const App = () => {
  let i = 0

  const [showMore, setShowMore] = useState(false)
  const [count, setCount] = useState(calculateCount)
  const [name, setName] = useState('')

  const handleIncreaseClick = () => {
    setCount(count + 1) // async func
    console.log('after setting count:', count) // old count
    i += 5
  }

  console.log({ count, i })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncreaseClick}>Increase count</button>
      {showMore && <p>{name}</p>}
      <br />
      <br /> <hr /> <br />
      <FilterableList />
      <br />
      <br /> <hr /> <br />
      <Preserving />
      <ShowCounterPreserving />
      <ShowCounterPreserving2 />
      <Scoreboard />
      <Scoreboard2 />
      <DisappearingInput />
      <SwapTwoForm />
      <ContactManager />
      <Gallery />
      <ContactList />
      <ClickCounter />
      <StopWatch />
      <Form />
      <CatFriends />
      <VideoPlayer />
      <Chat />
      <Toggle />
      <Dashboard />
      <ReadState />
    </div>
  )
}

export default App
