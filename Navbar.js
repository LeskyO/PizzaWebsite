import React, { useState } from "react";
import Logo from "../Pictures/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import { ShoppingCartOutlined } from "@material-ui/icons";
import "../Styles/Navbar.css";
 

function Navbar({ cartItems }) {
  const [openLinks, setOpenLinks] = useState(false);
  
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const cartItemCount = cartItems.length;
  const hasItemsInCart = cartItemCount > 0;

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" >
          <div>
            <ShoppingCartOutlined />
            {hasItemsInCart && <span className="cartIndicator">{cartItemCount}</span>}
            </div>
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
        <div>
        
            <ShoppingCartOutlined />
            {hasItemsInCart && <span className="cartIndicator">{cartItemCount}</span>}
            </div>
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
