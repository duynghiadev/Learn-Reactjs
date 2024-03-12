import { useSelector } from 'react-redux'
import { cartTotalSelector } from './selectors'

const CartFeature = () => {
  const cartTotal = useSelector(cartTotalSelector)

  return <div>Cart Feature: {cartTotal}</div>
}

export default CartFeature
