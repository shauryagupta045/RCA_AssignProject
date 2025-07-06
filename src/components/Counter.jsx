import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1 className="app-title">React Counter App</h1>
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="counter-display">{count}</div>
        <div className="buttons-container">
          <button onClick={decrement}>Decrement</button>
          <button onClick={increment}>Increment</button>
          <button onClick={reset} className="reset-btn">Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter; 