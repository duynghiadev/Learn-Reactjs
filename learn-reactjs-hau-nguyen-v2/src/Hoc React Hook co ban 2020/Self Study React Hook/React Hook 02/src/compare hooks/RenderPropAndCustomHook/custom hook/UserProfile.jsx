import React, { createContext, useContext } from 'react'

export const UserContext = createContext()

function UserProfile() {
  const { user } = useContext(UserContext)
  const emailLink = `mailto:${user.email}`

  return (
    <section>
      <h3>{user.name}</h3>
      <a href={emailLink} title={emailLink}>
        {user.email}
      </a>
    </section>
  )
}

export default UserProfile
