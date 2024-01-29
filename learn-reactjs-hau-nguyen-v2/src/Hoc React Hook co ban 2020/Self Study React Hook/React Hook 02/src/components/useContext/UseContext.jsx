import { createContext, useState } from 'react'
import { AppContext } from './context'
import Login from './Login'
import User from './User'

const UseContext = () => {
  const [username, setUsername] = useState('')
  console.log('username:', username)

  return (
    <div>
      <AppContext.Provider value={{ username, setUsername }}>
        <strong>This is a useContext hook 👇</strong>
        <h1>useContext hook</h1>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  )
}

export default UseContext
