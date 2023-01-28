import React from 'react';
import './App.css';

function App() {
  const name = 'Nghia';
  const age = '21';
  const isFemale = true;
  const student = {
    name: 'VKU',
  };
  const colorList = ['red', 'green', 'blue', 'yellow'];

  return (
    <div className="App">
      <header className="App-header">
        <p>Duy Nghia 123</p>
        <p>
          Xin chao {name}-{age}
        </p>

        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
