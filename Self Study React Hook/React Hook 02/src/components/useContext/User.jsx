import { useContext } from 'react'
import { AppContext } from './context'

const User = () => {
  const { username } = useContext(AppContext)

  return (
    <section>
      <h1>User: {username}</h1>
    </section>
  )
}

export default User
