"use client";
import "./cart.css";
import React, { useContext, useState } from "react";
import CartProductItem from "./CartProductItem";
import ShoppingCart from "./ShoppingCart";
import { GlobalContext } from "../context/GlobalContext";
import CartComponent from "./CartComponent";
import YourDetailsComponent from "./YourDetailsComponent";
import YourCartComponent from "./YourCartComponent";

export default function Page() {
  const { headerLinks, cartCount, cart, setCart, setCartCount } =
    useContext(GlobalContext);

  return (
    <div className="component-container">
      <div className="cart-page-container">
        <div>
          <YourDetailsComponent />
        </div>
        <div>
          <YourCartComponent />
        </div>
      </div>
    </div>
  );
}
