import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi.jsx'
import StorageKeys from '../../constants/storage-keys.js'

export const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    const data = await userApi.register(payload)

    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt)
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

    // return user data
    return data.user
  })

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    const data = await userApi.login(payload)

    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt)
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

    // return user data
    return data.user
  })


const uerSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {}
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload
    }
  }
})

const { reducer } = uerSlice
export default reducer
