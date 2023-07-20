import "./CartItem.css";
const CartItem = (props) => {
  const {
    product,
    deleteProductHandler,
    increaseProductHandler,
    decreaseProductHandler,
  } = props;
  console.log(product);
  const { title, price, thumbnailMain, quantity, id } = product || {};
  return (
    <div className="cart-item">
      <div className="display-product">
        <button
          className="function-btn"
          onClick={() => deleteProductHandler(id)}
        >
          X
        </button>
        <div className="checkout-image">
          <div className="checkout-image-container">
            <img src={thumbnailMain} />
          </div>
        </div>
        <div className="checkout-product-info">
          <div className="checkout-name">{title}</div>
          <div className="quantity">Quantity: {quantity}</div>
          <div className="increase-decrease-handler">
            <button
              className="function-btn"
              onClick={() => increaseProductHandler(id)}
            >
              +
            </button>
            <button
              className={quantity > 1 ? "function-btn" : "function-btn inactive"}
              onClick={() => decreaseProductHandler(id)}
            >
              -
            </button>
          </div>
        </div>
        <div className="pricing-display">
          <div className="checkout-price">${price}</div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
