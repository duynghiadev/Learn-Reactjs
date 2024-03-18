import React, { useEffect, useState } from 'react'

interface FieldProps {
  label: string
}

export const Field: React.FC<FieldProps> = ({ label }) => {
  useEffect(() => {
    return () => console.log('will unmount: Field')
  }, [])

  const [text, setText] = useState('')

  return (
    <label>
      {label}:{' '}
      <input
        type='text'
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  )
}
