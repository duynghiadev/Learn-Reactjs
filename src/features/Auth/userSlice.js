import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const register = createAsyncThunk('users/register', async (payload) => {
  // call API to register
  const data = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  // return user data
  return data.user;
});

export const login = createAsyncThunk('users/login', async (payload) => {
  // call API to login
  const data = await userApi.login(payload);

  // save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  // return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer; // default export
