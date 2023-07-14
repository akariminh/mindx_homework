import React from "react";

const ProductItem = () => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img
          className="img-before"
          src="https://hyperedu-shopping-cart.vercel.app/static/media/8552515751438644-1-cart.50b97093ba17b5aea490.webp"
          alt
        />
        <img
          className="img-after"
          src="https://hyperedu-shopping-cart.vercel.app/static/media/8552515751438644-1-cart.50b97093ba17b5aea490.webp"
          alt
        />
        <span className="free-shipping" />
      </div>
      <div className="products">
        <div className="product-name">Cropped Stay Groovy off white</div>
        <div className="product-info">X | White T-shirt</div>
        <div className="price-display">
          <div className="price" />
          <div className="promotion" />
        </div>
        <button className="my-btn" onclick="addProductToCart(${id})">
          Mua ngay
        </button>
      </div>
    </div>
  );
};
export default ProductItem;