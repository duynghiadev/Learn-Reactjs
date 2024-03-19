import React from 'react'
import './ContactList.scss'

interface Contact {
  id: number
  name: string
  email: string
}

interface ContactListProps {
  contacts: Contact[]
  selectedId: number
  onSelect: (id: number) => void
}

const ContactList: React.FC<ContactListProps> = ({ contacts, selectedId, onSelect }) => {
  return (
    <section className='contact-list'>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={() => onSelect(contact.id)}>
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactList
