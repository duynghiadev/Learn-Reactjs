import { useState } from 'react'

export function Form() {
  const [text, setText] = useState('')
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />
}
