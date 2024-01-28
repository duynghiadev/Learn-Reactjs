/**
 * In the code above, we did the following:
 *
 * - Created a UserContext that will pass the user’s name and email to every other componen
 *
 * - Created a UserProfile component that displays the user’s detail
 *
 * - Set up a ChangeProfile component that renders a list. When a user selects a profile, we update the context with the setUser metho
 *
 * - Defined a User component for storing the user’s data and providing it through the UserContext for its children components, UserProfile and ChangeProfile, to access
 */
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
