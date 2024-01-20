import { useState } from 'react'

const UseState = () => {
  // The reference to "isGreen" changes with each render
  const [isGreen, setIsGreen] = useState(true)

  console.log('render in component UseState')

  const handleClickGreen = () => {
    setIsGreen(!isGreen)
  }

  return (
    <div>
      <h4 style={{ marginBottom: '20px' }}>This is a content of useState hook 🚀</h4>
      <h3 style={{ color: isGreen ? 'green' : 'red' }} onClick={handleClickGreen}>
        UseState Example
      </h3>
    </div>
  )
}

export default UseState
