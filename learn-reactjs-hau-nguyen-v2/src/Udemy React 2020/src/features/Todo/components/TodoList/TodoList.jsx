import PropTypes from 'prop-types'
import './style.scss'

const TodoList = (props) => {
  const { todoList } = props

  return (
    <ul className='todo-list'>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array
}

TodoList.defaultProps = {
  todoList: []
}

export default TodoList
