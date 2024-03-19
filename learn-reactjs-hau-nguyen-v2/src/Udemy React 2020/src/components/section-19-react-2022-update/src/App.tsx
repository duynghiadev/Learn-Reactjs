import FilterableList from '@/198. Filter List/FilterListList'
import Preserving from '@/199. Preserving State/component01/Preverving'
import ShowCounterPreserving from '@/199. Preserving State/component02/ShowCounterPreserving'
import ShowCounterPreserving2 from '@/199. Preserving State/component03/ShowCounterPreserving2'
import Scoreboard from '@/200. Resetting State/component01/ScoreBoard'
import Scoreboard2 from '@/200. Resetting State/component02/ScoreBoard2'
import { DisappearingInput } from '@/201. Disappearing Input Text/DisappearingInput'
import SwapTwoForm from '@/202. Swap Two Form/SwapTwoForm'
import Gallery from '@/203. Reset Form/Clear Image While Loading/Gallery'
import ContactManager from '@/203. Reset Form/Reset A Detail Form/ContactManager'
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
    </div>
  )
}

export default App
