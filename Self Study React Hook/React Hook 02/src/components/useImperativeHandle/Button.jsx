import { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false)

  useImperativeHandle(ref, () => ({
    alertToggle() {
      setToggle(!toggle)
    }
  }))

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  )
})

export default Button
