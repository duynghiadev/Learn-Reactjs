import PropTypes from 'prop-types'
import TodoList from './components/TodoList/TodoList'

const TodoFeature = (props) => {
  const todoList = [
    {
      id: 1,
      title: 'Eat'
    },
    {
      id: 2,
      title: 'Sleep'
    },
    {
      id: 3,
      title: 'Code'
    }
  ]

  return (
    <div>
      <h3>To Do List</h3>
      <TodoList todoList={todoList} />
    </div>
  )
}

TodoFeature.propTypes = {}

export default TodoFeature
