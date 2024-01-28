import React, { useState } from 'react'

function EditableItem1({ label, initialValue }) {
  const [value, setValue] = useState(initialValue)
  const [editorVisible, setEditorVisible] = useState(false)

  console.log('value:', value)
  console.log('editorVisible:', editorVisible)

  const toggleEditor = () => setEditorVisible(!editorVisible)

  return (
    <main>
      <p>This is Editable Item 1</p>
      {editorVisible ? (
        <label>
          {label}
          <input type='text' value={value} onChange={(event) => setValue(event.target.value)} />
        </label>
      ) : (
        <span>{value}</span>
      )}
      <button onClick={toggleEditor}>{editorVisible ? 'Done' : 'Edit'}</button>
    </main>
  )
}

export default EditableItem1
