import React, { useState } from 'react'
import useToggle from './useToggle'

function EditableItem2({ label, initialValue }) {
  const [value, setValue] = useState(initialValue)
  const [editorVisible, toggleEditorVisible] = useToggle(false)

  return (
    <main>
      <p>This is Editable Item 2</p>
      {editorVisible ? (
        <label>
          {label}
          <input type='text' value={value} onChange={(event) => setValue(event.target.value)} />
        </label>
      ) : (
        <span>{value}</span>
      )}
      <button onClick={toggleEditorVisible}>{editorVisible ? 'Done' : 'Edit'}</button>
    </main>
  )
}

export default EditableItem2
