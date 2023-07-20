import "./App.css";
import Product from "./Components/Product.js";
import Cart from "./Components/Cart/Cart.js";
import Filter from "./Components/Filter/Filter.js";
import { useState } from "react";
import mockupDatas from "./utils/constants";

function App() {
  const [productsList, setProductsList] = useState(mockupDatas);
  const [cart, setCart] = useState([]);
  // const getFormattedPrice = (number) => number.toLocaleString('en-US')
  const addProductToCart = (id) => {
    const addedProduct = cart.find((product) => product.id === id);
    if (!addedProduct) {
      const newCartItem = {
        ...productsList.find((product) => product.id === id),
        quantity: 1,
      };
      setCart([...cart, newCartItem]);
    } else {
      const updatedCart = updatingCart(addedProduct);
      setCart([...updatedCart]);
    }
  };

  const updatingCart = (updatedProduct) =>
    cart.map((product) => {
      if (product.id === updatedProduct.id) {
        updatedProduct.quantity += 1;
        return updatedProduct;
      } else return product;
    });
  const deleteProductHandler = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };
  const increaseProductHandler = (id) => {
    const selectedProduct = cart.find((product) => product.id === id);
    const updatedCart = updatingCart(selectedProduct);
    setCart([...updatedCart]);
  };
  const decreaseProductHandler = (id) => {
    const selectedProduct = cart.find((product) => product.id === id);
    const updatedCart = cart.map((product) => {
      if (product.id === selectedProduct.id && selectedProduct.quantity > 1) {
        selectedProduct.quantity -= 1;
        return selectedProduct;
      } else return product;
    });
    setCart([...updatedCart]);
  };
  return (
    <div className="column-wrapper">
      <Filter />
      <Product
        productsList={productsList}
        addProductToCart={addProductToCart}
      />
      <Cart
        cart={cart}
        deleteProductHandler={deleteProductHandler}
        decreaseProductHandler={decreaseProductHandler}
        increaseProductHandler={increaseProductHandler}
      />
    </div>
  );
}

export default App;
