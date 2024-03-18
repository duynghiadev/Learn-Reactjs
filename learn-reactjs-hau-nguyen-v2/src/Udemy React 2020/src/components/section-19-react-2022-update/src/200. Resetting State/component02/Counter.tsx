import React, { useState } from 'react'

interface CounterProps {
  person: string
}

const Counter: React.FC<CounterProps> = ({ person }) => {
  const [score, setScore] = useState<number>(0)
  const [hover, setHover] = useState<boolean>(false)

  let className = 'counter'
  if (hover) {
    className += ' hover'
  }

  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3>
        {person}'s score: {score}
      </h3>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  )
}

export default Counter
