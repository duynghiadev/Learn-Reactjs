import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { register } from '../../userSlice.js'
import RegisterForm from '../RegisterForm/index.jsx'

const Register = (props) => {
  const dispatch = useDispatch()

  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      values.username = values.email

      console.log('Form Submit:', values)
      const action = register(values)
      const resultAction = await dispatch(action)
      const user = unwrapResult(resultAction)

      // do something here on register successfully
      console.log('new user:', user)
    } catch (error) {
      console.log('Failed to register:', error)
    }
  }

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Register
