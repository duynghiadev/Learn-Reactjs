import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Counter/counterSlice.js'

const rootReducer = {
  counter: counterReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store
