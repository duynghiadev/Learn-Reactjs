import { useEffect, useRef, useState } from 'react'

const randomColor = (currentColor) => {
  const COLOR_LIST = ['red', 'green', 'yellow']
  // random 0 --> 2
  const currentIndex = COLOR_LIST.indexOf(currentColor)
  let newIndex = Math.trunc(Math.random() * 3)

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3)
  }

  console.log(COLOR_LIST[newIndex])
  return COLOR_LIST[newIndex]
}

function useMagicColor() {
  const [color, setColor] = useState('transparent')
  const colorRef = useRef('transparent')

  // change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log('First color:', color)
      console.log('Change color:', colorRef.current)

      const newColor = randomColor()
      setColor(newColor)

      colorRef.current = newColor
    }, 1000)

    return () => {
      console.log('clean up in CustomHook useMagicColor')
      clearInterval(colorInterval)
    }
  }, [])

  return color
}

export default useMagicColor
