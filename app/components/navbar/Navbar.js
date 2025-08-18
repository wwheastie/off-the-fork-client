import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import cart from "./shopping-cart-white.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

const links = [
  { name: "Our Dishes", link: "/menu" },
  { name: "How it Works", link: "/menu" },
];
export default function Navbar() {
  return (
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
        <Button className="bg-orange-600  font-semibold ">
          <Image
            src={cart}
            alt="Site Logo"
            width={100}
            height={50}
            priority
            className="h-auto w-6"
          />
          <Link href={"/"}>
            {" "}
            <div className="hidden md:block">Cart</div>{" "}
          </Link>
        </Button>
        <div className="menu-button md:hidden">
          <div className="menu-bar top-bar"></div>
          <div className="menu-bar middle-bar"></div>
          <div className="menu-bar bottom-bar"></div>
        </div>
      </div>
    </div>
  );
}
