import RegisterForm from '../RegisterForm/index.jsx'

const Register = (props) => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Register
