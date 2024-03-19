import React, { useRef, useState } from 'react'
import './Chat.scss'

const Chat: React.FC = () => {
  const [text, setText] = useState<string>('')
  const [isSending, setIsSending] = useState<boolean>(false)
  const timeoutID = useRef<number | null>(null)

  const handleSend = () => {
    setIsSending(true)
    timeoutID.current = window.setTimeout(() => {
      alert('Sent!')
      setIsSending(false)
    }, 3000)
  }

  const handleUndo = () => {
    setIsSending(false)
    if (timeoutID.current !== null) {
      window.clearTimeout(timeoutID.current)
    }
  }

  return (
    <div className='chat-container'>
      <hr className='separator' />

      <input
        className='chat-input'
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className='send-button' disabled={isSending} onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>

      {isSending && (
        <button className='undo-button' onClick={handleUndo}>
          Undo
        </button>
      )}
    </div>
  )
}

export default Chat
