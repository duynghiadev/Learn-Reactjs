import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + 1
    },

    decrease(state, action) {
      return state - 1
    }
  }
})

const { action, reducer } = counterSlice

export const { increase, decrease } = action // name export
export default reducer // default export
