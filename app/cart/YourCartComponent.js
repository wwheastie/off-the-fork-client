"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CartProductItem from "./CartProductItem";
import { getCartTotal } from "../context/mockData";

function YourCartComponent() {
  const { headerLinks, cartCount, cart, setCart, setCartCount } =
    useContext(GlobalContext);

  console.log(cart);
  const onRemove = () => {
    console.log("on remove");
  };
  return (
    <div className="h-full min-h-80 ">
      <div className="flex justify-between px-6 py-2">
        <div className="text-md font-semibold hidden md:block">Your Cart</div>
        <div className=" text-xl font-bold  md:hidden">
          Total: ${getCartTotal(cart)}
        </div>
        <div
          className="text-red-400 text-md font-semibold cursor-pointer"
          onClick={() => {
            setCart([]);
            setCartCount(0);
          }}
        >
          Clear
        </div>
      </div>
      <div className="h-80 md:h-4/5 overflow-y-scroll py-1 px-1">
        {" "}
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <CartProductItem
              key={index}
              item={item}
              onRemove={onRemove}
              // itemQuantity={}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-48 text-gray-500 text-base">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
      <div className=" text-xl font-bold px-6 hidden md:block">
        Total: $ {getCartTotal(cart)}
      </div>
    </div>
  );
}

export default YourCartComponent;
