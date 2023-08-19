// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(item => {
        total += item.price * item.quantity
      })

      return (
        <div className="order-summary-container">
          <h1 className="order-total">
            Order Total: <span className="total-amount">{total}</span>
          </h1>
          <p className="order-total">{cartList.length} Items in cart</p>
          <button className="check-out-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
