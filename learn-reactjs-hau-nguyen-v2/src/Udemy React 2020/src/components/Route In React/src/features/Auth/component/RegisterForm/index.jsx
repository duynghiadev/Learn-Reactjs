import { yupResolver } from '@hookform/resolvers/yup'
import { Avatar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { LockOutlined } from '@material-ui/icons'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../../../components/form-controls/InputField'
import PasswordField from '../../../../components/form-controls/PasswordField/index.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4)
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main
  },
  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: 'center'
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0)
  }
}))

const RegisterForm = (props) => {
  const classes = useStyles()

  const schema = yup.object().shape({})

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
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          Create an account
        </Button>
      </form>
    </div>
  )
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func
}

export default RegisterForm
