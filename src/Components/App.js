import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [cart, setCart] = useState([])


  function addItem(item) {
    setCart(cart.concat([item.id, item.cantidad]))
  }

  return (
    <div className="App">
      <div className="header">
        <h1><Link to="/">Home</Link></h1>
        <div className="links">
            <Link to="/shop">shop</Link>
            <Link to="/cart" property={{f:addItem}}>cart {cart.length}</Link>
        </div>
      </div>  
      <Outlet />
    </div>
  );
}

export default App;
