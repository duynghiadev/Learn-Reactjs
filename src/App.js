import React from 'react';
import HomePage from 'pages/HomePage';
import { Link, NavLink, Route } from 'react-router-dom';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';

function App() {
  return (
    <div className="app">
      {/* <HomePage /> */}
      Header
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
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
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
