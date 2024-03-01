import { useState } from 'react'
import Countdown1 from '../Countdown'
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
    <div className='App'>
      <header className='App-header'>
        <Countdown1 seconds={30} />
        <ColorBox1 color={color} />
        <button onClick={handleClickChange}>Change Color</button>
      </header>
    </div>
  )
}

export default ColorMain
