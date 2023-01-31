import Countdown from 'components life cycle/willunmount';
import ChangeColor from 'components/ChangeColor';
import ChangeList from 'components/ChangeList';
import ColorBox from 'components/ColorBox';
import Counter from 'components/Counter';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import React, { useState } from 'react';
import BoxClick from 'react hook/example1';
import DailyList from 'react hook/example2';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      {/* This is content for theChange Color */}
      <ChangeList todos={todoList} onTodoClick={handleTodoClick} />

      {/* <ChangeColor /> */}
      {/* <BoxClick /> */}
      {/* <DailyList /> */}
      {/* <TodoFeature /> */}
      {/* <Countdown /> */}
      {/* <AlbumFeature /> */}
      {/* <ColorBox />
      <Counter /> */}
    </div>
  );
}

export default App;
