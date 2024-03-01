import { useState } from 'react'
import ColorBox1 from './ColorBox1'

const ColorMain = () => {
  const INIT_COLOR = ['red', 'yellow', 'blue', 'green']
  const [color, setColor] = useState('deeppink' || INIT_COLOR)

  const getRandomColor = () => {
    const randomColor = Math.trunc(Math.random() * 4)
    return INIT_COLOR[randomColor]
  }

  const handleClickChange = () => {
    const newColor = getRandomColor()
    setColor(newColor)
  }

  return (
    <div>
      <ColorBox1 color={color} />
      <button onClick={handleClickChange}>Change Color</button>
    </div>
  )
}

export default ColorMain
