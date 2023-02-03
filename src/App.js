import React, { useState } from 'react';
import './App.css';
import Hero from 'components/Hero';
import HomePage from 'pages/HomePage';

function App() {
  const [count, setCount] = useState(0);

  // next video: useCallback vs useMemo
  const handleHeroClick = () => {};

  return (
    <div className="app">
      <h1>React Hooks - Clock</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Duy Nghia" onClick={handleHeroClick} />

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
