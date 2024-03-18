import React, { useState } from 'react'
import Counter from './Counter'

const Scoreboard: React.FC = () => {
  const [isPlayerA, setIsPlayerA] = useState<boolean>(true)

  return (
    <div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <hr /> <br /> <br /> <br />
      {isPlayerA ? <Counter person='Taylor' /> : <Counter person='Sarah' />}
      <button onClick={() => setIsPlayerA(!isPlayerA)}>Next player!</button>
    </div>
  )
}

export default Scoreboard
