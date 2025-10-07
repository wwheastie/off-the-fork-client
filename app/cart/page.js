"use client";
import "./cart.css";
import React, { useContext, useState } from "react";
import CartProductItem from "./CartProductItem";
import ShoppingCart from "./ShoppingCart";
import { GlobalContext } from "../context/GlobalContext";
import CartComponent from "./CartComponent";
import YourDetailsComponent from "./YourDetailsComponent";
import YourCartComponent from "./YourCartComponent";
import { Button } from "@/components/ui/button";
import { getCartTotal } from "../context/mockData";
import { Spinner } from "@/components/ui/spinner";

export default function Page() {
  const { headerLinks, cartCount, cart, setCart, setCartCount } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  return (
    <div className="component-container">
      {loading ? (
        <div className="w-full border border-gray h-200 flex justify-center items-center text-lg">
          <>
            <Spinner /> <div className="m-200"></div>Loading
          </>
        </div>
      ) : (
        <div className="cart-page-container">
          <div>
            <YourDetailsComponent />
            <div className="hidden ml-6 w-4/5 md:flex flex-col gap-2 ">
              <div className="flex justify-between font-bold  text-lg ">
                <div>Total</div>
                <div> $ {getCartTotal(cart)}</div>
              </div>{" "}
              <Button className="bg-orange-600  text-md w-full ">
                Proceed To Payment
              </Button>
            </div>
          </div>
          <div>
            <YourCartComponent />
          </div>
        </div>
      )}
    </div>
  );
}
