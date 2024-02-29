import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

const InputField = (props) => {
  const { form, name, label, disabled } = props

  return (
    <>
      <Controller name={name} control={form.control} as={TextField} fullWidth label={label} disabled={disabled} />
    </>
  )
}

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool
}

export default InputField
