import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice'; // name import
import styles from './styles.module.css';

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncreaseClick = () => {
    const action = increase(123); // action creator
    console.log(action);
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease(234); // action creator
    console.log(action);
    dispatch(action);
  };
  return (
    <div className={styles.counter}>
      Counter: {count}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
