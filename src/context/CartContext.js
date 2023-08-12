import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  totalPrice: 0,
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
