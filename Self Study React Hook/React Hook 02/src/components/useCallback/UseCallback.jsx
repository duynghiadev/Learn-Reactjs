import { useCallback, useState } from 'react'
import Child from './Child'
import ChildModify from './ChildModify'

const UseCallback = () => {
  const [toggle, setToggle] = useState(false)
  const data = 'My name is '

  const returnComments = useCallback(
    (name) => {
      return data + name
    },
    [data]
  )

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='App'>
      <strong>This is a useCallback hook 👇</strong>
      <Child returnComments={returnComments} />
      <ChildModify returnComments={returnComments} />

      <button onClick={handleToggle}>Toggle</button>

      {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default UseCallback
