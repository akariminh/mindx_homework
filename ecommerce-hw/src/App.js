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
      setCart(...cart, newCartItem);
    } else {
      const revisedCartItem = {...addedProduct, quantity: 2}
      setCart(...cart, revisedCartItem);
    }
  };
  return (
    <div className="column-wrapper">
      <Filter />
      <Product
        productsList={productsList}
        addProductToCart={addProductToCart}
      />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
