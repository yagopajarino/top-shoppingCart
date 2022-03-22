import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom"

function App(props) {
  const { cart } = props
  
  return (
    <div className="App">
      <div className="header">
        <h1><Link to="/">Home</Link></h1>
        <div className="links">
            <Link to="/shop">shop</Link>
            <Link to="/cart">cart {cart.reduce((total,c) => total+c["cantidad"], 0)}</Link>
        </div>
      </div>  
      <Outlet />
    </div>
  );
}

export default App;
