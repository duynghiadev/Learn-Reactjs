import { yupResolver } from '@hookform/resolvers/yup'
import { Avatar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { LockOutlined } from '@material-ui/icons'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../../../components/form-controls/InputField'

const RegisterForm = (props) => {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short')
  })

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: ''
    },
    resolver: yupResolver(schema)
  })

  const handleSubmit = (values) => {
    const { onSubmit } = props
    if (onSubmit) {
      onSubmit(values)
    }
    form.reset()
  }

  return (
    <div>
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />
        <InputField name="retypePassword" label="Retype Password" form={form} />
      </form>
    </div>
  )
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func
}

export default RegisterForm
