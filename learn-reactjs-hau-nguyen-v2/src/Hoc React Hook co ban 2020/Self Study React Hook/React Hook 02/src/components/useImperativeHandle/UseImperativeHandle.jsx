import { useRef } from 'react'
import Button from './Button'

const UseImperativeHandle = () => {
  const buttonRef = useRef(null)

  return (
    <div>
      <strong>This is useImperativeHandle hook 👇</strong>
      <br />
      <button
        onClick={() => {
          buttonRef.current.alertToggle()
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default UseImperativeHandle
