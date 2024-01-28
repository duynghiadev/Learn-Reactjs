import { useContext } from 'react'
import { UserContext } from './UserProfile'

function ChangeProfile() {
  const profiles = [
    {
      name: 'Aditya',
      email: 'adityaa803@gmail.com'
    },
    {
      name: 'duynghia',
      email: 'duynghiadev@gmail.com'
    },
    {
      name: 'Arnold',
      email: 'arnold@terminator.machines'
    }
  ]

  const { user, setUser } = useContext(UserContext)

  const updateUser = (event) => {
    const profile = profiles[event.target.value]
    console.log('event.target.value in function updateUser:', event.target.value)
    setUser(profile)
  }

  return (
    <ul>
      <br />
      <hr />
      <p>This is Change Profile use context for change users</p>
      <select onChange={updateUser}>
        {profiles.map((profile, index) => (
          <option value={index} key={profile.email}>
            {profile.name}
          </option>
        ))}
      </select>
    </ul>
  )
}

export default ChangeProfile
