import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import CartProductItem from "./CartProductItem";
import OrderDetailsSection from "./OrderDetailsSelection.js";
import { useBodyScrollLock } from "./useBodyScrollLock.js";
import { dedupeCart } from "./functions";
import CartPopUp from "./CartPopUp";
import CartComponent from "./CartComponent";

export default function ShoppingCart({
  isOpen,
  onClose,
  cartItems = [],
  onRemove,
  onClear,
}) {
  useBodyScrollLock(isOpen);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  // console.log(cartItems);
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item?.price * 1, 0);

  const handleProceedToCheckout = () => {
    setShowOrderDetails(true);
  };

  const handleBackToCart = () => {
    setShowOrderDetails(false);
  };

  const handleClose = () => {
    setShowOrderDetails(false);
    onClose();
  };
  const uniqueCart = dedupeCart(cartItems);

  return (
    <>
      {/* Backdrop for the popup */}
      <div
        className="fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-sm z-[1000]"
        onClick={handleClose}
      ></div>

      <CartComponent onClose={onClose} />
    </>
  );
}
