import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { login } from '../../userSlice.js'
import LoginForm from '../LoginForm/index.jsx'

const Login = (props) => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const handleSubmit = async (values) => {
    try {
      const action = login(values)
      const resultAction = await dispatch(action)
      unwrapResult(resultAction)

      // close dialog
      const { closeDialog } = props
      if (closeDialog) {
        closeDialog()
      }
    } catch (error) {
      console.log('Failed to login:', error)
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}

Login.propTypes = {
  closeDialog: PropTypes.func
}

export default Login
