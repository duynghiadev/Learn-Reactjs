import React, { useRef } from 'react'
import './FormRef.scss'

const FormRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className='form-container'>
      <hr className='separator' />

      <input className='form-input' ref={inputRef} />
      <button className='form-button' onClick={handleClick}>
        Focus the input
      </button>
    </div>
  )
}

export default FormRef
