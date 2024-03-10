import { yupResolver } from '@hookform/resolvers/yup'
import { Avatar, LinearProgress } from '@material-ui/core'
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
    position: 'relative',
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
  },

  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0
  }
}))

const LoginForm = (props) => {
  const classes = useStyles()

  const schema = yup.object()
    .shape({
      identifier: yup.string()
        .required('Please enter your email.')
        .email('Please enter your email address'),

      password: yup.string()
        .required('Please enter your password')
    })

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const handleSubmit = async (values) => {
    const { onSubmit } = props
    if (onSubmit) {
      await onSubmit(values)
    }
  }

  const { isSubmitting } = form.formState

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Sign In
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Sign in
        </Button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}

export default LoginForm
