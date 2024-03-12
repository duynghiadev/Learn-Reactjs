import { makeStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'
import { useSelector } from 'react-redux'
import { cartItemsCountSelector, cartTotalSelector } from './selectors'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
    marginTop: '20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  totalSection: {
    marginTop: '20px',
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalItems: {
    fontSize: '1.2rem'
  },
  totalPrice: {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  }
}))

const CartFeature = () => {
  const classes = useStyles()
  const cartItemsCount = useSelector(cartItemsCountSelector)
  const cartTotal = useSelector(cartTotalSelector)

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>
        <ShoppingCartIcon /> Shopping Cart
      </h2>
      {cartItemsCount === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>{/* Render Cart Items Here */}</div>
          <div className={classes.totalSection}>
            <p className={classes.totalItems}>Total Items: {cartItemsCount}</p>
            <p className={classes.totalPrice}>Total Price: ${cartTotal.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default CartFeature
