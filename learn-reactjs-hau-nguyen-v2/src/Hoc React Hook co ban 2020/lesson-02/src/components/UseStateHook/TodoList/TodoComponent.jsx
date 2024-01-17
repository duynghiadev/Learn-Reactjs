import PropTypes from 'prop-types'
import { useState } from 'react'
import TodoChild from './TodoChild'
import './TodoComponent.scss'
import TodoForm from '../TodoForm/TodoForm'

TodoComponent.propTypes = {}

function TodoComponent(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' }
  ])

  function handleTodoClick(todo) {
    console.log(todo)
    const index = todoList.findIndex((x) => x.id === todo.id)
    if (index < 0) return

    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    console.log('formSubmit:', formValues)
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }

    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

  return (
    <div className='todo-component'>
      <h1>React hooks - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoChild todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  )
}

export default TodoComponent
