import Contact from '@/203. Reset Form/Fix Misplaced/Contact'
import React, { useState } from 'react'
import './ContactList.scss' // Import SCSS file

interface Contact {
  id: number
  name: string
  email: string
}

const ContactList: React.FC = () => {
  const [reverse, setReverse] = useState<boolean>(false)

  const displayedContacts: Contact[] = [...contacts]
  if (reverse) {
    displayedContacts.reverse()
  }

  return (
    <div className='contact-list'>
      <div className='line-above'></div> {/* Add line above */}
      <label>
        <input
          type='checkbox'
          checked={reverse}
          onChange={(e) => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const contacts: Contact[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 3, name: 'Ronaldo', email: 'ronaldo@mail.com' }
]

export default ContactList
