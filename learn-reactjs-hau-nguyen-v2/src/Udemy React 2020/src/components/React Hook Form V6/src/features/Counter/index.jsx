import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)

    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action);
    }
    
    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action);
    }
    return (
        <div>
            Counter: {counter}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;