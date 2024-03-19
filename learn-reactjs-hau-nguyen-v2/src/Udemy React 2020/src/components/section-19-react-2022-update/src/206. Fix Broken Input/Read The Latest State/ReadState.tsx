import React, { useRef, useState } from 'react'
import './ReadState.scss'

const ReadState: React.FC = () => {
  const [text, setText] = useState<string>('')
  const valueRef = useRef<string>('')

  const handleSend = () => {
    setTimeout(() => {
      alert('Sending: ' + valueRef.current) // Use the captured latest text
    }, 3000)
  }

  return (
    <div className='chat-container'>
      <hr className='separator' />

      {/* uncontrolled component */}
      <input
        className='chat-input'
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          valueRef.current = e.target.value
        }}
      />
      <button className='send-button' onClick={handleSend}>
        Send
      </button>
    </div>
  )
}

export default ReadState
