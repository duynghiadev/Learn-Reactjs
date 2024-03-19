import React, { useRef } from 'react'
import './DebouncedButton.scss'

interface DebouncedButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const DebouncedButton: React.FC<DebouncedButtonProps> = ({ onClick, children }) => {
  const timeoutRef = useRef<number | undefined>()

  return (
    <button
      className='debounced-button'
      onClick={() => {
        clearInterval(timeoutRef.current)

        timeoutRef.current = setTimeout(() => {
          onClick()
        }, 1000)
      }}
    >
      {children}
    </button>
  )
}

export default DebouncedButton
