import React, { useState } from 'react'
import './style.scss'

export const PrevervingCounter: React.FC = () => {
  const [score, setScore] = useState<number>(0)
  const [hover, setHover] = useState<boolean>(false)

  let className = 'counter'
  if (hover) {
    className += ' hover'
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  )
}
