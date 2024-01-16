import { useState } from 'react'
import './ColorBox.scss'
import PropTypes from 'prop-types'

ColorBox3.propTypes = {}

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
  const randomIndex = Math.trunc(Math.random() * 5)
  return COLOR_LIST[randomIndex]
}

function ColorBox3(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink'
    console.log('initColor:', initColor)
    return initColor
  })

  function handleBoxClick() {
    // get random color --> set color
    const newColor = getRandomColor()
    setColor(newColor)
    localStorage.setItem('box_color', newColor)
  }

  return (
    <div className='color-box' style={{ backgroundColor: color }} onClick={handleBoxClick}>
      COLOR BOX
    </div>
  )
}

export default ColorBox3
