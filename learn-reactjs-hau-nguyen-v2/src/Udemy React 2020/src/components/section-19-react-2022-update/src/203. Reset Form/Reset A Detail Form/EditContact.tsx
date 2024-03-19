import React, { useEffect, useState } from 'react'
import './EditContact.scss'

interface Contact {
  id: number
  name: string
  email: string
}

interface EditContactProps {
  initialData: Contact | undefined
  onSave: (updatedData: Contact) => void
}

const EditContact: React.FC<EditContactProps> = ({ initialData, onSave }) => {
  const [name, setName] = useState(initialData ? initialData.name : '')
  const [email, setEmail] = useState(initialData ? initialData.email : '')

  // Reset form fields when initialData changes
  useEffect(() => {
    setName(initialData ? initialData.name : '')
    setEmail(initialData ? initialData.email : '')
  }, [initialData])

  const handleSaveClick = () => {
    const updatedData: Contact = {
      id: initialData?.id || 0,
      name: name,
      email: email
    }
    onSave(updatedData)
  }

  const handleResetClick = () => {
    if (initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
    }
  }

  return (
    <section className='edit-contact'>
      <label>
        Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email: <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={handleResetClick}>Reset</button>
    </section>
  )
}

export default EditContact
