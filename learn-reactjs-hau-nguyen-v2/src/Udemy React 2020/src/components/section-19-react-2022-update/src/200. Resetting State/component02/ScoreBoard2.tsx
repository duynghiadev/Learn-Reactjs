import Counter from '@/200. Resetting State/component02/Counter'
import { useState } from 'react'

export default function Scoreboard2() {
  const [isPlayerA, setIsPlayerA] = useState(true)
  return (
    <div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <hr /> <br /> <br /> <br />
      {isPlayerA && <Counter person='Taylor' />}
      {!isPlayerA && <Counter person='Sarah' />}
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA)
        }}
      >
        Next player!
      </button>
    </div>
  )
}
