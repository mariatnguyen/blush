import React from "react";
import "./Header.css";

export default function Header() {
    return (
      <header>
        <div id="logo">
          <h1>
          <img
          src="/images/logo.svg"
          width="300"
          height="56"
          alt="BLUSH"
          />
          </h1>
        </div>
        <nav>
          <ul id="categories">
            <li className="category">Blush</li>
            <li className="category">Lipstick</li>
            <li className="category">Eyeshadow</li>
            <li className="category">All</li>
          </ul>
          <ul id="icons">
            <li><img
            className="icon"
            src="/images/icons/heart.svg"
            width="25"
            height="25"
            alt="heart"
            /></li>
            <li><img
            className="icon"
            src="/images/icons/cart.svg"
            width="25"
            height="25"
            alt="cart"
            /></li>
          </ul>
        </nav>
      </header>
    );
}