import { useRef, useState } from 'react'

const UseRef = () => {
  const [data, setData] = useState('duynghiadev')

  const inputRef = useRef(null)

  let changeAndFocus = () => {
    inputRef.current.focus()
    setData(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <div>
      <strong>This is a useRef hook 👇</strong>
      <h1>{data}</h1>
      <input type='text' ref={inputRef} />
      <button onClick={changeAndFocus}>Change Name</button>
    </div>
  )
}

export default UseRef
