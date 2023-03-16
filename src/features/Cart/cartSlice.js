import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart(true);
    },

    hideMiniCart(state) {
      state.showMiniCart(false);
    },
  },
});

const { actions, reducers } = cartSlice;
export const { showMiniCart, hideMiniCart } = actions; // name export
export default reducers; // default export
