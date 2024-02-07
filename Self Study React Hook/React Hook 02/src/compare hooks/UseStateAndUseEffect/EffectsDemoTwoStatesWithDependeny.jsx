import { useEffect, useRef, useState } from 'react'

function EffectsDemoTwoStatesWithDependeny() {
  const [title, setTitle] = useState(
    'default title in components EffectsDemoTwoStatesWithDependeny'
  )
  const titleRef = useRef()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log('useEffect in components EffectsDemoTwoStatesWithDependeny')
    document.title = title
  }, [title])

  console.log('render in components EffectsDemoTwoStatesWithDependeny')
  const handleClick = () => setTitle(titleRef.current.value)
  const handleCheckboxChange = () => setDarkMode((prev) => !prev)

  return (
    <div className={darkMode ? 'view dark-mode' : 'view'}>
      <label htmlFor='darkMode'>dark mode</label>
      <input name='darkMode' type='checkbox' checked={darkMode} onChange={handleCheckboxChange} />
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  )
}

export default EffectsDemoTwoStatesWithDependeny
