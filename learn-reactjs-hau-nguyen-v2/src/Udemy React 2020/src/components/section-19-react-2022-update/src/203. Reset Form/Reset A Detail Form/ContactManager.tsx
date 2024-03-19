import React, { useState } from 'react'
import ContactList from './ContactList'
import './ContactManager.scss'
import EditContact from './EditContact'

interface Contact {
  id: number
  name: string
  email: string
}

const initialContacts: Contact[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]

const ContactManager: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  const [selectedId, setSelectedId] = useState<number>(0)
  const selectedContact = contacts.find((c) => c.id === selectedId)

  const handleSave = (updatedData: Contact) => {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData
      } else {
        return c
      }
    })
    setContacts(nextContacts)
  }

  return (
    <div className='contact-manager'>
      <hr />
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id)}
      />
      <EditContact initialData={selectedContact} onSave={handleSave} />
    </div>
  )
}

export default ContactManager
