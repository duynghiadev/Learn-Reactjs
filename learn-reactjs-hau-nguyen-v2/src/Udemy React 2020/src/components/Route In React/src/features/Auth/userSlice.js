import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi.jsx'

const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    const data = await userApi.register(payload)

    // save data to local storage
    localStorage.setItem('access_token', data.jwt)
    localStorage.setItem('user', JSON.stringify(data.user))

    // return user data
    return data.user
  })

const uerSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {}
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload
    }
  }
})

const { reducer } = uerSlice
export default reducer
