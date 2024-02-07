import { useEffect, useRef, useState } from 'react'

function EffectsDemoTwoStates() {
  const [title, setTitle] = useState('default title in components EffectsDemoTwoStates')
  const titleRef = useRef()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log('useEffect in components EffectsDemoTwoStates')
    document.title = title
  })

  console.log('render in components EffectsDemoTwoStates')

  const handleClick = () => setTitle(titleRef.current.value)
  const handleCheckboxChange = () => setDarkMode((prev) => !prev)

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <label htmlFor='darkMode'>dark mode</label>
      <input name='darkMode' type='checkbox' checked={darkMode} onChange={handleCheckboxChange} />
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  )
}

export default EffectsDemoTwoStates
