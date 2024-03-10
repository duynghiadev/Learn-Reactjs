import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { register } from '../../userSlice.js'
import RegisterForm from '../RegisterForm/index.jsx'

const Register = (props) => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      values.username = values.email

      console.log('Form Submit:', values)
      const action = register(values)
      const resultAction = await dispatch(action)
      unwrapResult(resultAction)

      // close dialog
      const { closeDialog } = props
      if (closeDialog) {
        closeDialog()
      }

      enqueueSnackbar('Register successfully 🎉', { variant: 'success' })
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

Register.propTypes = {
  closeDialog: PropTypes.func
}

export default Register
