import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userEmail: null,
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserEmail } = userSlice.actions;

export default userSlice.reducer;
