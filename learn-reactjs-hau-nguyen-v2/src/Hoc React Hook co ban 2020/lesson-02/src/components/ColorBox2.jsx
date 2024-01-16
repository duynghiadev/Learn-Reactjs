import { useState } from 'react'

// Function Component
function ColorBox2() {
  const [color, setColor] = useState('blue')
  const [share, setShare] = useState('square')

  function handleBoxClick() {
    setColor('red')
  }

  return (
    <div className='color-box'>
      <button
        type='button'
        style={{ background: color, marginTop: '10px' }}
        onClick={handleBoxClick}
      >
        function component
      </button>
    </div>
  )
}

export default ColorBox2
