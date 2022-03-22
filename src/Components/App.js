import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom"
import videoRiver from "../Static/videoRiver.mov"
import cartIcon from "../Static/iconCart.png"

function App(props) {
  const { cart, displayVideo, toggleVideo } = props
  
  function video() {
    return (
      <video autoPlay muted loop id="myVideo">
        <source src={videoRiver} type="video/mp4" />
      </video>
    )
  }

  return (
    <div className="App">
      {displayVideo ? video() : null}
      <div className="header">
        <div className="headerTitle"><Link to="/" onClick={toggleVideo} id="home">Tienda River</Link></div>
        <div className="links">
            <Link to="/shop" onClick={toggleVideo} id="shop">Shop</Link>
            <Link to="/cart" onClick={toggleVideo} id="cart"><img id="cartIcon" src={cartIcon} /> {cart.reduce((total,c) => total+c["cantidad"], 0)}</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
