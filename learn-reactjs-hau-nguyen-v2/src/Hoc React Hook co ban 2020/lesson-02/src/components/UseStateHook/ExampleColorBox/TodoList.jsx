import { useState } from 'react'

function TodoList() {
  const [todoList, setTodoList] = useState(['love', 'easy', 'frontend'])

  function removeTodo(index) {
    // remember to clone into a new array
    const newTodoList = [...todoList]

    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  return (
    <ul className='todo-list'>
      {todoList.map((todo, index) => (
        <li key={index} onClick={() => removeTodo(index)}>
          {todo}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
