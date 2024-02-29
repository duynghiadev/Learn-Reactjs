import PropTypes from 'prop-types'
import InputField from '../../../../components/form-controls/InputField'
import { useForm } from 'react-hook-form'

const TodoForm = (props) => {
  const { onSubmit } = props
  const form = useForm({
    defaultValues: {
      title: ''
    }
  })

  const handleSubmit = (values) => {
    console.log('TODO FORM:', values)
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      Todo Form
      <InputField name='title' label='Todo' form={form} />
    </form>
  )
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func
}

export default TodoForm
