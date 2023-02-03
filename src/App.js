import React from 'react';
import HomePage from 'pages/HomePage';
import { Route } from 'react-router-dom';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';

function App() {
  return (
    <div className="app">
      {/* <HomePage /> */}
      To do feature
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
    </div>
  );
}

export default App;
