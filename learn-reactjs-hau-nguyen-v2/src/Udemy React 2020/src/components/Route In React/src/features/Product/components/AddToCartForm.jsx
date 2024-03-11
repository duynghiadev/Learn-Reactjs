import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../../components/form-controls/InputField'

const AddToCartForm = ({ onSubmit = null }) => {
  const schema = yup.object().shape({
    quantity: yup.number().required('Please enter quantity').min(1, 'Please enter at least 1')
  })

  const form = useForm({
    defaultValues: {
      quantity: 1
    },
    resolver: yupResolver(schema)
  })

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name='quantity' label='Quantity' form={form} />

      <Button type='submit' variant='contained' color='primary' fullWidth size='large'>
        Buy
      </Button>
    </form>
  )
}

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func
}

export default AddToCartForm
