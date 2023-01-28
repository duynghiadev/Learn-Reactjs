import React from 'react';
import './App.css';

function App() {
  const name = 'Nghia';
  const age = '21';
  const isMale = true;
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

        {isMale ? 'Male' : 'Female'}

        {isMale && <p>OK</p>}
        {!isMale && <p>NOT OK</p>}

        <p>{student.name}</p>

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
