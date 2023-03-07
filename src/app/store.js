import counterReducer from '../features/Counter/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  counter: counterReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
