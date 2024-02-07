import { useContext } from 'react'
import { AppContext } from './context'

const Login = () => {
  const { setUsername } = useContext(AppContext)

  return (
    <section>
      <input
        onChange={(event) => {
          setUsername(event.target.value)
        }}
      />
    </section>
  )
}

export default Login
