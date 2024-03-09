import { createSlice } from '@reduxjs/toolkit'

const uerSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {}
  },
  reducers: {}
})

const { reducer } = uerSlice
export default reducer 
