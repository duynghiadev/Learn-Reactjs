import { useState } from 'react'

const UseState = () => {
  // Number
  const [counter, setCounter] = useState(0)

  // Objects
  const [state, setState] = useState({ name: 'John', age: 30 })

  // Arrays
  const [array, setArray] = useState([1, 2, 3, 4, 5])

  /**
   * But, useState doesn’t return just a variable, as the previous examples imply. It returns an array, where the first element is the state variable and the second element is a function to update the value of the variable:
   */
  const messageState = useState('')
  const message = messageState[0] // Contains ''
  const setMessage = messageState[1] // It's a function

  // Usually, you’ll use array destructuring to simplify the code shown above like this: 👇
  // const [message, setMessage]= useState( '' );

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const updateName = () => {
    setState({ ...state, name: 'Jane' })
  }

  const updateAge = () => {
    setState({ ...state, age: state.age + 1 })
  }

  const addItem = () => {
    setArray([...array, 6])
  }

  const removeItem = () => {
    setArray(array.slice(0, array.length - 1))
  }

  return (
    <div>
      <div id='usestate'>
        <strong>This is a useState hook</strong>
        <h1>{counter}</h1>
        <button onClick={handleIncrement}>Click</button>
      </div>

      <div>
        <h2>State Object:</h2>
        <p>Name: {state.name}</p>
        <p>Age: {state.age}</p>
        <button onClick={updateName}>Update Name</button>
        <button onClick={updateAge}>Increase Age</button>
      </div>

      <div>
        <h2>Array:</h2>
        <ul>
          {array.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Item</button>
        <button onClick={removeItem}>Remove Last Item</button>
      </div>

      <div>
        <h2>Message: {message}</h2>
        <button onClick={() => setMessage('Hello, React!')}>Set Message</button>
      </div>
    </div>
  )
}

export default UseState
