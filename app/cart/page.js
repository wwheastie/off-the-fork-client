"use client";
import React, { useContext, useState } from "react";
import CartProductItem from "./CartProductItem";
import ShoppingCart from "./ShoppingCart";
import { GlobalContext } from "../context/GlobalContext";
import CartComponent from "./CartComponent";

export default function Page() {
  const { headerLinks, cartCount, cart, setCart, setCartCount } =
    useContext(GlobalContext);

  return <div className="component-container h-100"></div>;
}
