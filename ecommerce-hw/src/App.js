import "./App.css";
import Product from "./Components/Product.js";
import Cart from "./Components/Cart.js";
import Filter from "./Components/Filter.js";

function App() {
  return (
    <div className="column-wrapper">
      <Filter/>
      <Product />
      <Cart />
    </div>
  );
}

export default App;
