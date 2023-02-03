import React from 'react';
import HomePage from 'pages/HomePage';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';

function App() {
  return (
    <div className="app">
      {/* <HomePage /> */}
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
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
