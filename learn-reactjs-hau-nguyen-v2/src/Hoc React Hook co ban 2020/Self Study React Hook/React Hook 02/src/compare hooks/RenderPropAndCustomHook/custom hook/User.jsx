import { useState } from 'react'
import { UserContext } from './UserProfile'

function User({ children }) {
  const [user, setUser] = useState({
    name: 'Aditya',
    email: 'adityaa803@gmail.com'
  })

  const value = { user, setUser }

  return (
    <>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>
  )
}

export default User
