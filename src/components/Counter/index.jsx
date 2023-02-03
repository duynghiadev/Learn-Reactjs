import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

Counter.propTypes = {};

function Counter(props) {
  // Run 1
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  // Run 3
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleIncreaseClick = () => {
    setCount((x) => x + 1);
  };

  // Run 2
  return (
    <div>
      <p>Previous: {prevCount.current}</p>
      <p>Current: {count}</p>

      <button onClick={handleIncreaseClick}>Increase</button>
    </div>
  );
}

export default Counter;
