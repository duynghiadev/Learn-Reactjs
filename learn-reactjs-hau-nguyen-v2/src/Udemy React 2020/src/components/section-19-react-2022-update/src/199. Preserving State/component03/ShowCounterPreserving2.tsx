import { Counter } from '@/199. Preserving State/component03/Counter'
import { useState } from 'react'

export default function ShowCounterPreserving2() {
  const [isPaused, setIsPaused] = useState(false)
  return (
    <div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <hr /> <br /> <br /> <br />
      {isPaused ? <p>See you later!</p> : <Counter />}
      <label>
        <input
          type='checkbox'
          checked={isPaused}
          onChange={(e) => {
            setIsPaused(e.target.checked)
          }}
        />
        Take a break
      </label>
    </div>
  )
}
