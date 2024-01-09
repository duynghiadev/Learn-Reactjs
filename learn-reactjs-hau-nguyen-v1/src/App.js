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
import styled from 'styled-components';
import Header from 'components/Header';
import ProductFeature from 'features/Product';
import CartFeature from 'features/Cart';

function App() {
  return (
    <div className="app">
      {/* <HomePage /> */}
      {/* <Countdown1 seconds={30} />
      <ColorBox1 color="deeppink" />
      <ColorBox1 color="green" /> */}

      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact></Redirect>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
