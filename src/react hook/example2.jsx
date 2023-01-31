import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DailyList(props) {
  const [todoList, setTodoList] = useState(['love', 'easy', 'frontend']);

  function removeTodo(index) {
    // Remember to clone into a new array
    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li key={todo.id} onClick={() => removeTodo(index)}>
          {todoList + ' '}
        </li>
      ))}
    </ul>
  );
}

DailyList.propTypes = {};

export default DailyList;
