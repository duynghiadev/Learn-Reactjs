import { useEffect, useRef, useState } from 'react'
import { randomColor } from '../components/randomColor'

const useMagicColor = () => {
  const [color, setColor] = useState('transparent')
  const colorRef = useRef('transparent')

  // change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current)
      setColor(newColor)

      colorRef.current = newColor
    }, 1000)

    // cleanup
    return () => {
      clearInterval(colorInterval)
    }
  }, [])

  return color
}

export default useMagicColor
