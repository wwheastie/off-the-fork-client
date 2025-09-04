"use client";
import { createContext, useContext, useState } from "react";
import image1 from "./logo.png";
// Create context
export const GlobalContext = createContext();

// Create a provider
export function GlobalProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  const websiteInfo = {
    // mainColor: "#169873",
    mainColor: "#169873c0",
    secondaryColor: "#44ABFF",
    AlternateColor1: "#E3F0FF",
    AlternateColor2: "#6A7798",
    light: "#FFFFFF",
    dark: "#000000",
    title: "",
    mainLine: "",
    tagLine: "",
    logo: image1,
  };

  const headerLinks = [
    {
      name: "Home",
      Link: "/",
      case: "all",
      subLinks: [],
    },
  ];
  let x = "hello";

  return (
    <GlobalContext.Provider
      value={{
        cartCount,
        setCartCount,
        headerLinks,
        websiteInfo,
        cart,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
