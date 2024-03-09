import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/Auth/userSlice.js'
import counterReducer from '../features/Counter/counterSlice.js'

const rootReducer = {
  count: counterReducer,
  user: userReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store
