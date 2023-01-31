import Countdown from 'components life cycle/willunmount';
import ColorBox from 'components/ColorBox';
import Counter from 'components/Counter';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import React from 'react';
import BoxClick from 'react hook/example1';
import DailyList from 'react hook/example2';

function App() {
  return (
    <div className="App">
      <BoxClick />
      <DailyList />
      {/* <TodoFeature /> */}
      {/* <Countdown /> */}
      {/* <AlbumFeature /> */}
      {/* <ColorBox />
      <Counter /> */}
    </div>
  );
}

export default App;
