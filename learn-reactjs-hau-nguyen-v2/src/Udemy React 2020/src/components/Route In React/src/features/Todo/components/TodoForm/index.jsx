import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../../../components/form-controls/InputField'

const TodoForm = (props) => {
  const { onSubmit } = props

  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short')
  })

  const form = useForm({
    defaultValues: {
      title: ''
    },
    resolver: yupResolver(schema)
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
