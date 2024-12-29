import React from "react";
import { FaShoppingCart } from "react-icons/fa"; 
import "../styles/navbar.css";

const Navbar = ({ cartCount, setShowCart }) => {
  return (
    <div className="navbar">
      <h1>QuickMart</h1>
      <div
        className="cart-container"
        onClick={() => setShowCart((prev) => !prev)} 
      >
        <FaShoppingCart className="cart-icon" size={18} /> 
        {cartCount > 0 && <span>{cartCount}</span>} 
      </div>
    </div>
  );
};

export default Navbar;
