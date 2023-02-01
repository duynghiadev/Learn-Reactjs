import Countdown from 'components life cycle/willunmount';
import ChangeColor from 'components/ChangeColor';
import ChangeForm from 'components/ChangeForm';
import ChangeList from 'components/ChangeList';
import ColorBox from 'components/ColorBox';
import Counter from 'components/Counter';
import PostList from 'components/PostList';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import React, { useState } from 'react';
import { useEffect } from 'react';
import BoxClick from 'react hook/example1';
import DailyList from 'react hook/example2';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ]);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }

    console.log('POST list effect');
    fetchPostList();
  }, []);

  useEffect(() => {
    console.log('TODO list effect');
  });

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form Submit: ', formValues);
    // Add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      {/* This is content for the Change Color and Change Form */}
      <ChangeForm onSubmit={handleTodoFormSubmit} />
      <ChangeList todos={todoList} onTodoClick={handleTodoClick} />
      <PostList posts={postList} />

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
