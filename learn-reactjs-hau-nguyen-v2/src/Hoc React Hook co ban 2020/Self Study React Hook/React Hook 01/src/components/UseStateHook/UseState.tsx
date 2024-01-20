import { useState } from 'react'

const UseState = () => {
  // The reference to "isGreen" changes with each render
  const [isGreen, setIsGreen] = useState(true)

  console.log('render in component UseState')

  const handleClickGreen = () => {
    setIsGreen(!isGreen)
  }

  return (
    <h3 style={{ color: isGreen ? 'green' : 'red' }} onClick={handleClickGreen}>
      UseState Example
    </h3>
  )
}

export default UseState
