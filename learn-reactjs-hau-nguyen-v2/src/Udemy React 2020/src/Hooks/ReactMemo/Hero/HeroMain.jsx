import { useState } from 'react'
import Hero from './Hero'

const HeroMain = () => {
  const [count, setCount] = useState(0)

  // next video: useCallback, useMemo
  const handleHeroClick = () => {}

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name='Duynghiadev' onClick={handleHeroClick} />
    </div>
  )
}

export default HeroMain
