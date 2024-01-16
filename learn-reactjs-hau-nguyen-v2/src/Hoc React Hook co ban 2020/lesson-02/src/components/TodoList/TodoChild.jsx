import PropTypes from 'prop-types'
import './TodoChild.scss'

TodoChild.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
}

TodoChild.defaultProps = {
  todos: [],
  onTodoClick: null
}

function TodoChild(props) {
  const { todos, onTodoClick } = props

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo)
    }
  }

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}

export default TodoChild
