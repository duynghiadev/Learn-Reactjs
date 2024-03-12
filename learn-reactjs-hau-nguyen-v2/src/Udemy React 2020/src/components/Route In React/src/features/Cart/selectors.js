import { createSelector } from '@reduxjs/toolkit'

const cartItemsSelector = (state) => state.cart.cartItems

// Count number of products in cart
export const cartItemsCountSelector = createSelector(cartItemsCountSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
)

// Caculate total of cart
export const cartTotalSelector = createSelector(cartItemsCountSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0)
)
