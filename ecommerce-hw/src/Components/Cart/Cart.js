import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
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
              <p>Add some products in the cart :)</p>
              <CartItem />
            </div>
            <div className="checkout-section">
              <div className="fee-checkout">
                <div className="inner-content">Subtotal</div>
                <div className="total-price"> $0.00 </div>
              </div>
              <button className="my-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
