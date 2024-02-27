import { useState } from 'react'
import './ColorBoxVer2.scss'

const ColorBoxVer2 = () => {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink'
    console.log('initColor:', initColor)
    return initColor
  })

  const getRandomColor = () => {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const randomIndex = Math.trunc(Math.random() * 5)
    return COLOR_LIST[randomIndex]
  }

  const handleBoxClick = () => {
    // get random color -> set color
    const newColor = getRandomColor()
    setColor(newColor)

    localStorage.setItem('box_color', newColor)
  }

  return (
    <div className='color-box' style={{ backgroundColor: color }} onClick={handleBoxClick}></div>
  )
}

export default ColorBoxVer2
