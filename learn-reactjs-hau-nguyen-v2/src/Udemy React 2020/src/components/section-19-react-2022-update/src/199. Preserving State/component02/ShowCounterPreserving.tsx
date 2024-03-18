import { Counter } from '@/199. Preserving State/component02/Counter'
import { useState } from 'react'
import './style.scss'

export default function ShowCounterPreserving() {
  const [showB, setShowB] = useState(true)
  return (
    <div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <hr /> <br /> <br /> <br />
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type='checkbox'
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
    </div>
  )
}
