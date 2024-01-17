import PropTypes from 'prop-types'
import { useState } from 'react'
import './TodoForm.scss'

TodoForm.propTypes = {
  onSubmit: PropTypes.func
}

TodoForm.defaultProps = {
  onSubmit: null
}

function TodoForm(props) {
  const { onSubmit } = props
  const [value, setValue] = useState('')

  function handleValueChange(e) {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    // Preven reloading browser
    e.preventDefault()
    if (!onSubmit) return

    const formValues = {
      title: value
    }
    onSubmit(formValues)

    // Reset form
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input type='text' value={value} onChange={handleValueChange} />
    </form>
  )
}

export default TodoForm
