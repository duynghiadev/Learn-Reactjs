import React, { useRef } from 'react'
import './ClickCounter.scss'

const ClickCounter: React.FC = () => {
  const ref = useRef<number>(0)

  const handleClick = () => {
    ref.current = ref.current + 1
    console.log('ref.current:', ref.current)
    alert('You clicked ' + ref.current + ' times!')
  }

  return (
    <div className='counter-container'>
      <hr className='separator' />
      <p className='counter-text'>Counter Value: {ref.current}</p>
      <button className='counter-button' onClick={handleClick}>
        Click me!
      </button>
    </div>
  )
}

export default ClickCounter
