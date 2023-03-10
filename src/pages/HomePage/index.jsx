import Countdown from 'components life cycle/willunmount';
import ChangeColor from 'components/ChangeColor';
import ChangeForm from 'components/ChangeForm';
import ChangeList from 'components/ChangeList';
import ColorBox from 'components/ColorBox';
import Counter from 'components/Counter';
import Pagination from 'components/Pagination';
import PostList from 'components/PostList';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import React, { useState } from 'react';
import { useEffect } from 'react';
import queryString from 'query-string';
import BoxClick from 'react hook/example1';
import DailyList from 'react hook/example2';
import PostFiltersForm from 'components/PostFiltersForm';
import Clock from 'components/Clock';
import BetterClock from 'components/BetterClock';
import MagicBox from 'components/MagicBox';
import './HomePage.scss';

function HomePage() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }

    console.log('POST list effect');
    fetchPostList();
  }, [filters]);

  useEffect(() => {
    console.log('TODO list effect');
  });

  function handlePageChange(newPage) {
    console.log('New Page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

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

  function handleFiltersChange(newFilters) {
    console.log('New Filter: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app-homepage">
      {/* This is content for the Change Color and Change Form */}
      <ChangeForm onSubmit={handleTodoFormSubmit} />
      <ChangeList todos={todoList} onTodoClick={handleTodoClick} />

      <h4>---Search Term---</h4>
      <PostFiltersForm onSubmit={handleFiltersChange} />

      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />

      <h4>---Clock---</h4>
      {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(false)}>Hide clock</button>
      <button onClick={() => setShowClock(true)}>Show clock</button>

      <MagicBox />

      <ChangeColor />
      <BoxClick />
      <DailyList />
      <TodoFeature />
      <Countdown />
      <AlbumFeature />
      <ColorBox />
      <Counter />
    </div>
  );
}

export default HomePage;
