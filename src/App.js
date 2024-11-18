import React, { useState } from 'react';
import './App.scss';

function App() {
  // State example: a counter
  const [count, setCount] = useState(0);

  // Event handler functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        {/* Logo */}
        <img src="https://reactjs.org/logo-og.png" className="App-logo" alt="logo" />

        {/* Welcome message */}
        <h1>Welcome to React</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Example: Counter */}
        <div>
          <h2>Counter Example</h2>
          <p>Current Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement} disabled={count <= 0}>
            Decrement
          </button>
        </div>

        {/* Link to React documentation */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
