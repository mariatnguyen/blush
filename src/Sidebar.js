import React, { useState } from "react";
import { ShoppingCart } from './AllProducts.js';

export default function SideBar() {

  return (
    <div id="overlay">
      <div className="sidebar">
        <div className="sidebar-content">
          <span id="close">
            <img
              className="icon"
              src="/images/icons/close.svg"
              width="25"
              height="25"
              alt="cart"
            />
          </span>
          <div className="sidebar-title">
            <img
              src="/images/icons/cart.svg"
              width="25"
              height="25"
              alt="cart"
            />
            <h2>Cart</h2>
            <ShoppingCart />
            <p>Total: </p>
          </div>
          <div className="sidebar-title">
            <img
              src="/images/icons/heart.svg"
              width="25"
              height="25"
              alt="heart"
            />
            <h2>Favorites</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
