import React, { useState } from 'react'
import './Toggle.scss' // Import SCSS file

const Toggle: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  return (
    <>
      <hr className='separator' />

      <button
        className={`toggle-button ${isOn ? 'on' : 'off'}`}
        onClick={() => {
          setIsOn((prevIsOn) => !prevIsOn)
        }}
      >
        {isOn ? 'On' : 'Off'}
      </button>
    </>
  )
}

export default Toggle
