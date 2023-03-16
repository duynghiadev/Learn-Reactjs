import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state) => state.cart.cartItems;

// Count number of products in cart
export const cartItemsCounterSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reducer((count, item) => count + item.quantity, 0)
);

// Calculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reducer((total, item) => total + item.salePrice * item.quantity, 0)
);
