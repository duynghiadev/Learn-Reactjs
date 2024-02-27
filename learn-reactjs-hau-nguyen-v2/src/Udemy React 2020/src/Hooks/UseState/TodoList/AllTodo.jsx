import { useState } from 'react'
import TodoList from './TodoList'
import './AllTodo.scss'

const AllTodo = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' }
  ])

  const handleTodoClick = (todo) => {
    console.log(todo)
    const index = todoList.findIndex((todos) => todos.id === todo.id)
    if (index < 0) return

    const newTodo = [...todoList]
    newTodo.splice(index, 1)
    setTodoList(newTodo)
  }

  return (
    <div className='all-todo-container'>
      <h2>React hooks - Todo Lists</h2>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  )
}

export default AllTodo
