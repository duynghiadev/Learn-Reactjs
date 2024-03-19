import React, { useState } from 'react'
import './Contact.scss'

interface ContactProps {
  contact: {
    id: number
    name: string
    email: string
  }
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const handleToggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  return (
    <div className='contact'>
      {' '}
      {/* Apply class name */}
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button onClick={handleToggleExpanded}>{expanded ? 'Hide' : 'Show'} email</button>
    </div>
  )
}

export default Contact
