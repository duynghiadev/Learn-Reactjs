import { useState, useEffect } from 'react'
import './ReactMemo.scss'
import HeroMain from './Hero/HeroMain'

const AddMemo = (a, b) => {
  // Init cache
  if (!AddMemo.cache) {
    AddMemo.cache = {}
  }
  // Return cache if found
  const key = `${a}_${b}`
  const symmetricKey = `${b}_${a}`
  if (AddMemo.cache[key]) return AddMemo.cache[key]
  if (AddMemo.cache[symmetricKey]) return AddMemo.cache[symmetricKey]
  // Calculate and save to cache
  const sum = a + b
  AddMemo.cache[key] = sum
  AddMemo.cache[symmetricKey] = sum
  return sum
}

function ReactMemo() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)

  useEffect(() => {
    console.log('Component rendered!')
  })

  const calculateAndDisplay = () => {
    const parsedNum1 = parseInt(num1)
    const parsedNum2 = parseInt(num2)
    const calculatedResult = AddMemo(parsedNum1, parsedNum2)
    setResult(calculatedResult)
  }

  return (
    <div className='react-memo'>
      <h1 className='react-memo__title'>React Memo (Higher Order Component)</h1>
      <h2 className='react-memo__title'>Add Memo Calculator</h2>
      <div className='react-memo__input'>
        <label htmlFor='num1' className='react-memo__label'>
          Number 1:
        </label>
        <input
          type='number'
          id='num1'
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className='react-memo__input-field'
        />
      </div>
      <div className='react-memo__input'>
        <label htmlFor='num2' className='react-memo__label'>
          Number 2:
        </label>
        <input
          type='number'
          id='num2'
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className='react-memo__input-field'
        />
      </div>
      <button onClick={calculateAndDisplay} className='react-memo__button'>
        Calculate
      </button>
      <div className='react-memo__result'>Result: {result}</div>

      <HeroMain />
    </div>
  )
}

export default ReactMemo
