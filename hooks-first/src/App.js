import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Score is: {count} </p>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
