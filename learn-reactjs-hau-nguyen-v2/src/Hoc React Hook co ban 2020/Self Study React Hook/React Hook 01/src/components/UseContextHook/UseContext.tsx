import { useContext, useState } from 'react'
import { Provider, UserContext } from './Context'

const UseContext = () => {
  const user = useState({
    firstName: 'Nghia',
    lastName: 'Duy',
    suffix: 1,
    email: 'duynghiadev@gmail.com'
  })

  return (
    <div>
      <Provider value={user}>
        {/* {console.log('value user:', user)} */}
        <h1 className='ft-red'>1st Provider</h1>👇<Level2></Level2>
      </Provider>
    </div>
  )
}

const Level2 = () => (
  <div>
    <h2>2nd Provider</h2>👇<Level3></Level3>
  </div>
)

const Level3 = () => (
  <div>
    <h3>3rd Provider</h3>👇<Level4></Level4>
  </div>
)

const Level4 = () => (
  <div>
    <h4>4th Provider</h4>👇<Level5></Level5>
  </div>
)

const Level5 = () => {
  // receive context
  const [user, setUser] = useContext<any>(UserContext)
  return (
    <div>
      <h5 className='ft-red'>useContext</h5>
      <h5>{`${user.lastName} ${user.firstName} the ${user.suffix} born`}</h5>
      <button
        onClick={() => {
          setUser({ ...user, suffix: user.suffix + 1 })
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default UseContext
