import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/Auth/userSlice.js'
import cartReducer from '../features/Cart/cartSlice.js'
import counterReducer from '../features/Counter/counterSlice.js'

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: cartReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store
