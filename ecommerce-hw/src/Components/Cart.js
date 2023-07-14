import React from "react";
import CartItem  from "./CartItem";


const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-icon">
        <i class="fa-light fa-cart-shopping"></i>
      </div>
      <div className="cart-content">
        <div className="cart-logo">
          <i class="fa-light fa-cart-shopping"></i>
        </div>
      </div>
      <div className="wrapper">
        <div className="checkout">
          <table className="product-table">
            <thead>
              <tr>
                <th scope="col" className="hidden">
                  Hinh ảnh
                </th>
                <th scope="col" className="hidden">
                  Thông tin chi tiết sản phẩm
                </th>
                <th scope="col" className="hidden">
                  Số lượng
                </th>
                <th scope="col" className="hidden">
                  Đơn giá
                </th>
              </tr>
            </thead>
            <tbody id="cart-checkout"></tbody>
          </table>
          <div id="finalize-fee">
            <div className="fee-wrapper">
              <div className="inner-content">Tổng</div>
              <div id="total-price" />
            </div>
            <div className="fee-wrapper">
              <div className="inner-content">Phí ship</div>
              <div className="text">Nhân viên sẽ liên hệ và báo phí ship</div>
            </div>
          </div>
          <table className="total-checkout">
            <thead>
              <tr>
                <th scope="col" className="hidden">
                  Description
                </th>
                <th scope="col" className="hidden">
                  blank
                </th>
                <th scope="col" className="hidden">
                  blank
                </th>
                <th scope="col" className="hidden">
                  Giá
                </th>
              </tr>
            </thead>
            <tbody>
              <CartItem />
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Cart