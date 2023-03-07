import React, { useEffect } from 'react';
import HomePage from 'pages/HomePage';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';
import NotFound from 'components/Not Found';
import productApi from 'api/productApi';
import ColorBox1 from 'learn reactjs easy/react props state/ColorBox';
import Countdown1 from 'learn reactjs easy/react props state/Countdown';
import CounterFeature from 'features/Counter';
import './App.css';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="app">
      {/* <HomePage /> */}
      {/* <Countdown1 seconds={30} />
      <ColorBox1 color="deeppink" />
      <ColorBox1 color="green" /> */}
      Header
      <p>
        <NavLink to="/todos" activeClassName="active-todo">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active-albums">
          Albums
        </NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact></Redirect>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
