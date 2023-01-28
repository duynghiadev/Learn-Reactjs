import React from 'react';
import PropTypes from 'prop-types';

function TodoList(props) {
  const { todoList } = props;

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

export default TodoList;
