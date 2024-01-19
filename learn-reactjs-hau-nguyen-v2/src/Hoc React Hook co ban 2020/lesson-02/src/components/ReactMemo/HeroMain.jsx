import { useState } from 'react'
import Hero from './Hero'

function HeroMain() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Introduction Memozation and React.memo 🏃‍♂️</h1>

      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name='Duynghiadev' />
    </div>
  )
}

export default HeroMain
