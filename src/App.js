/** @format */

import Routes from "./Allroutes/Routes";
import "./App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <h1 className='navbar-h1s-header'>
            <h3>TeeRex Store</h3>
          </h1>
        </div>
        <Link to='/' className='navbar-header-product'>
          Products
        </Link>
        <Link to='/cart' className='navbar-icon'>
          <AiOutlineShoppingCart />
        </Link>
      </div>
      <Routes />
    </div>
  );
}

export default App;
