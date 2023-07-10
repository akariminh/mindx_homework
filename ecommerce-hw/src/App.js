import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="column-wrapper">
     <div className="sort-size">
      <div className="size-circle"></div>
     </div>
    
    <Product />
    <Cart />
    </div>
  );
}

export default App;
