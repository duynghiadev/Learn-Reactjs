import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartState, cartTotal } from '../../cartState'

CartInfo.propTypes = {}

function CartInfo(props) {
  const cart = useRecoilValue(cartState)
  const total = useRecoilValue(cartTotal)

  console.log('cartState from component CartInfo:', cart)

  return (
    <div>
      <h2>Cart info:</h2>

      <ul className='cart-items'>
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.title}: {item.quantity}
          </li>
        ))}
      </ul>

      <p className='total'>TOTAL: {total} VND</p>
    </div>
  )
}

export default CartInfo
