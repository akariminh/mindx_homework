import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = (props) => {
  const {
    cart,
    increaseProductHandler,
    decreaseProductHandler,
    deleteProductHandler,
  } = props;
  const getTotalPrice = cart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  const renderCartItem = cart.map((product) => {
    return <CartItem
      key={product.id}
      product={product}
      increaseProductHandler={increaseProductHandler}
      decreaseProductHandler={decreaseProductHandler}
      deleteProductHandler={deleteProductHandler}
    />;
  })
  const submitValidator = () => {
    if (cart.length <= 1) {
      alert("Please add products to your cart!")
    }
  };

  return (
    <div className="cart">
      <div className="cart-icon">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
      <div className="cart-content">
        <div className="cart-title">
          <i class="fa-solid fa-cart-shopping"></i>
          <h4>Cart</h4>
        </div>
        <div className="wrapper">
          <div className="checkout">
            <div className="cart-item-list">
              {cart.length < 1 ? (
                <p>Add some products in the cart :)</p>
              ) :
                renderCartItem
              }
            </div>
            <div className="checkout-section">
              <div className="fee-checkout">
                <div className="inner-content">Subtotal</div>
                <div className="total-price"> ${getTotalPrice} </div>
              </div>
              <button className="my-btn" onClick={submitValidator}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
