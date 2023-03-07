import counterReducer from '../features/Counter/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  count: counterReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
