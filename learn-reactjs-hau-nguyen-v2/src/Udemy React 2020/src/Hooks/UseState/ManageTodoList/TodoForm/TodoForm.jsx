import { useState } from 'react'
import './TodoForm.scss'
import PropTypes from 'prop-types'

const TodoForm = (props) => {
  const { onSubmit } = props
  const [value, setValue] = useState('')

  const handleValueChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    // prevent reloading browser
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
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={handleValueChange} />
    </form>
  )
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func
}

TodoForm.defaultProps = {
  onSubmit: null
}

export default TodoForm
