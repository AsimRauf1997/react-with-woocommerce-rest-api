import React from "react";
// import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <div className='header'>
      <a href='#default' class='logo'>
        Demo Project For WooCommerce
      </a>
      <div className='header-right'>
        <a href='/'>Books</a>
        <a href='/products'>Products</a>
        <a href='/orders'>Orders</a>
      </div>
    </div>
  );
};

export default Header;
