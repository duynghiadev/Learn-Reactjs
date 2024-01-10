import { atom, selector } from 'recoil'

export const cartState = atom({
  key: 'cart',
  // each item in list has 3 keys: id, product and quantity
  default: []
})

export const cartTotal = selector({
  key: 'cartTotal',
  get: ({ get }) => {
    const cart = get(cartState)

    return cart.reduce((total, item) => {
      console.log('total from component cartState:', total)
      console.log('item from component cartState:', item)

      return total + item.product.price * item.quantity
    }, 0)
  }
})

export const addToCart = (cart, product) => {
  const newCart = [...cart]
  const foundIndex = cart.findIndex((x) => x.id === product.id)

  console.log(`newCart in component cartState: ${newCart}`)
  console.log(`foundIndex in component cartState: ${foundIndex}`)

  // Increase quantity if existing
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1
    }
    return newCart
  }

  // Add new item
  newCart.push({
    product,
    id: product.id,
    quantity: 1
  })
  return newCart
}
