"use client";
import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import cartIcon from "./shopping-cart-white.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import MobileMenu from "./MobileMenu";
import { GlobalContext } from "@/app/context/GlobalContext";
import ShoppingCart from "@/app/cart/ShoppingCart";

const links = [
  { name: "Our Dishes", link: "/menu" },
  { name: "How it Works", link: "/menu" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const context = useContext(GlobalContext);
  const { headerLinks, cartCount = 0, cart = [], setCart, setCartCount } = context || {};
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const onRemoveFunction = (id, quantity) => {
    //
    const newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
    setCartCount((prev) => prev - quantity);
  };
  const onClearFunction = () => {
    console.log("on clear function clicked");
  };

  const onCloseFunction = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ShoppingCart
        isOpen={isOpen}
        onClose={onCloseFunction}
        cartItems={cart}
        onRemove={onRemoveFunction}
        onClear={onClearFunction}
      />{" "}
      <div className="navbar-container">
        <div className="flex items-center font-semibold gap-10 w-full ">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src={logo}
              alt="Site Logo"
              width={150}
              height={50}
              priority
              className="h-auto w-10"
            />
          </Link>
          {links.map((link) => (
            <Link className="hidden md:block" key={link.name} href={"/"}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex">
          {" "}
          <Button
            className="bg-orange-600  font-semibold "
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Image
              src={cartIcon}
              alt="Site Logo"
              width={100}
              height={50}
              priority
              className="h-auto w-6"
            />
            <Link href={"/"}>
              {" "}
              <div className="hidden md:block">
                Cart <span>{isHydrated && cartCount > 0 && `(${cartCount})`} </span>{" "}
              </div>{" "}
            </Link>
          </Button>
          {/* <ShoppingCart
            isOpen={isOpen}
            onClose={onCloseFunction}
            cartItems={cart}
            onRemove={onRemoveFunction}
            onClear={onClearFunction}
          /> */}
          <div
            className="menu-button md:hidden"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <div className="menu-bar top-bar"></div>
            <div className="menu-bar middle-bar"></div>
            <div className="menu-bar bottom-bar"></div>
          </div>
        </div>
      </div>{" "}
      <div></div>
    </>
  );
}
