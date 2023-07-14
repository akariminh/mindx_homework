import React from "react";

const CartItem = () => {
  return (
    <div classname="cart-item">
        <div className="display-product">
          <div className="checkout-image">
            <div className="checkout-image-container">
              <img src="" />
            </div>
            <div className="quantity"></div>
          </div>
          <div className="checkout-product-info">
            <div className="checkout-name"></div>
            <div className="checkout-info"></div>
          </div>
          <div className="pricing-display">
            <div className="old-price"></div>
            <div className="current-price"></div>
          </div>
        </div>
    </div>
  );
};
export default CartItem;
