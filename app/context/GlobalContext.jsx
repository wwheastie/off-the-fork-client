"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import image1 from "./logo.png";
import { mockData } from "./mockData";
// Create context
export const GlobalContext = createContext();

// Safe readers
const readCartCount = () => {
  if (typeof window === "undefined") return 0;
  const raw = localStorage.getItem("cartCount");
  const n = parseInt(raw, 10);
  return Number.isFinite(n) ? n : 0;
};

const readCart = () => {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem("cart");
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

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

// Create a provider
export function GlobalProvider({ children }) {
  // Initialize from localStorage (client only)
  const [cartCount, setCartCount] = useState(readCartCount);
  const [cart, setCart] = useState(readCart);

  // Write-through on changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("cartCount", String(cartCount));
  }, [cartCount]);

  useEffect(() => {
    console.log("cart changed");
    // if (typeof window === "undefined") return;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Cross-tab sync (optional but handy)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onStorage = (e) => {
      if (e.storageArea !== localStorage) return;

      if (e.key === "cartCount" && e.newValue != null) {
        const n = parseInt(e.newValue, 10);
        if (Number.isFinite(n)) setCartCount(n);
      }
      if (e.key === "cart" && e.newValue != null) {
        try {
          const next = JSON.parse(e.newValue);
          if (Array.isArray(next)) setCart(next);
        } catch {
          /* ignore bad JSON */
        }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(
    () => ({
      cartCount,
      setCartCount,

      cart,
      setCart,
    }),
    [cartCount, cart]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
