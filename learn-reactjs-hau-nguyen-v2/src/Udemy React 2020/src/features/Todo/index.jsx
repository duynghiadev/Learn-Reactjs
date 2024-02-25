import PropTypes from 'prop-types'
import TodoList from './components/TodoList/TodoList'
import { useState } from 'react'

const TodoFeature = (props) => {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new'
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Code',
      status: 'new'
    }
  ]

  const [todoList, setTodoList] = useState(initTodoList)
  const [filteredStatus, setFilteredStatus] = useState('all')

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx)

    // clone current array to the new one
    const newTodoList = [...todoList]

    // toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
    }
    newTodoList[idx] = newTodo

    // update todo list
    setTodoList(newTodoList)
  }

  const handleShowAllClick = () => {
    setFilteredStatus('all')
  }

  const handleShowCompletedClick = () => {
    setFilteredStatus('completed')
  }

  const handleShowNewClick = () => {
    setFilteredStatus('new')
  }

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === 'all' || filteredStatus === todo.status
  )
  console.log(renderedTodoList)

  return (
    <div>
      <h3>To Do List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  )
}

TodoFeature.propTypes = {}

export default TodoFeature
