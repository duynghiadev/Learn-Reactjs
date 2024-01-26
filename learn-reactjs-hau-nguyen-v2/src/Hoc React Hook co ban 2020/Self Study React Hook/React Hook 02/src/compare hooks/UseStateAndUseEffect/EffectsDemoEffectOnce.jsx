import { useEffect, useRef, useState } from 'react'

function EffectsDemoEffectOnce() {
  const [title, setTitle] = useState('default title in components EffectsDemoEffectOnce')
  const titleRef = useRef()

  useEffect(() => {
    console.log('useEffect title in components EffectsDemoEffectOnce')
    document.title = title
  })

  useEffect(() => {
    console.log('useEffect local storage in components EffectsDemoEffectOnce')
    const persistedTitle = localStorage.getItem('title in components EffectsDemoEffectOnce')
    setTitle(persistedTitle || [])
  }, [])

  console.log('render in components EffectsDemoEffectOnce')
  const handleClick = () => setTitle(titleRef.current.value)

  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  )
}

export default EffectsDemoEffectOnce
