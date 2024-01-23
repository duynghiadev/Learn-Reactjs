import React, { useState, useLayoutEffect, useEffect } from 'react'

type UseLayoutEffectExampleProps = {}

type UseLayoutEffectExampleState = {
  title: string
  message: string
}

const UseLayoutEffectExample: React.FC<UseLayoutEffectExampleProps> = () => {
  const [state, setState] = useState<UseLayoutEffectExampleState>({
    title: 'test title using useLayoutEffect',
    message: ''
  })

  useLayoutEffect(() => {
    document.title = state.title
    console.log('useLayoutEffect changed title to: ' + state.title)
  }, [state.title])

  const handleTitleClick = () => {
    const newTitle = prompt('Enter a new title:')
    if (newTitle !== null) {
      setState((prevState) => ({ ...prevState, title: newTitle }))
    }
  }

  useEffect(() => {
    console.log('Component has rendered.')
  }, [])

  useEffect(() => {
    if (state.message === '') {
      setState((prevState) => ({ ...prevState, message: 'Hello world' }))
    }
  }, [state.message])

  return (
    <div>
      <h1 onClick={handleTitleClick}>{state.title}</h1>
      <p>Title set using state: {state.title}</p>
      <p>Message: {state.message}</p>
    </div>
  )
}

export default UseLayoutEffectExample
