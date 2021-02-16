import React, { useState } from "react";
import Sidebar from './Sidebar';
import { blushes, lipsticks, eyeshadows } from "./Products";

export default function ProductsList() {
  function listProducts(item, index) {
    return <div className="product-individual" id={'product--' + index} key={index}>
      <div className="product-image">
        <div className="product-image-icons">
          <ul>{console.log(this)}
            <li><img
              className="icon"
              src="/images/icons/addtocart.svg"
              width="25"
              height="25"
              alt="cart"
            /></li>
            <li><img
              className="icon"
              src="/images/icons/heart.svg"
              width="25"
              height="25"
              alt="heart"
            /></li>
          </ul>
        </div>
        <div className="product-image-img"><img src={item.src}></img></div>
      </div>
      <div className="product-title">{item.name}</div>
      <div className="product-category">{item.category}</div>
      <div className="product-price">{item.price}</div>
    </div>;
  }

  const blushList = blushes.map(listProducts);
  const lipstickList = lipsticks.map(listProducts);
  const eyeshadowList = eyeshadows.map(listProducts);

  return (
    <div className="products-wrapper">
      {blushList}
      {lipstickList}
      {eyeshadowList}
    </div>
  );
}
