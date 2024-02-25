import PropTypes from 'prop-types'
import { useState } from 'react'

const ColorBox = () => {
  const [color, setColor] = useState('white')

  return (
    <div>
      {color}
      <button onClick={() => setColor('black')}>Change to black</button>
      <button onClick={() => setColor('white')}>Change to white</button>
    </div>
  )
}

ColorBox.propTypes = {}

export default ColorBox
