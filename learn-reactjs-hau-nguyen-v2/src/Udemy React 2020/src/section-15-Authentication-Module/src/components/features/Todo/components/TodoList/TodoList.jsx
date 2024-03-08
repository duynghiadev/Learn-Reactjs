import PropTypes from 'prop-types'
import './style.scss'
import classnames from 'classnames'

const TodoList = (props) => {
  const { todoList, onTodoClick } = props

  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return

    onTodoClick(todo, idx)
  }

  return (
    <ul className='todo-list'>
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            'todo-item': true,
            completed: todo.status === 'completed'
          })}
          onClick={() => handleTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func
}

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null
}

export default TodoList
