import Countdown from 'components life cycle/willunmount';
import ColorBox from 'components/ColorBox';
import Counter from 'components/Counter';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import React from 'react';

function App() {
  return (
    <div className="App">
      <TodoFeature />
      <Countdown />
      {/* <AlbumFeature /> */}
      {/* <ColorBox />
      <Counter /> */}
    </div>
  );
}

export default App;
