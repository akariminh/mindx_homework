import React from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { product, addProductToCart } = props;
  const { title, price, thumbnailMain, thumbnailExtra, freeship, id } =
    product || {};
  return (
    <div className="product-card">
      <div className="img-container">
        <img className="img-before" src={thumbnailMain} alt={title} />
        <img className="img-after" src={thumbnailExtra} alt={title} />
        {freeship && <div className="free-shipping">Freeship</div>}
      </div>
      <div className="products">
        <div className="product-name">{title}</div>
        <div className="price-display">
          <span className="price">${price}</span>
        </div>
      </div>
      <button className="my-btn" onClick={() => addProductToCart(id)}>
        Add to cart
      </button>
    </div>
  );
};
export default ProductItem;
