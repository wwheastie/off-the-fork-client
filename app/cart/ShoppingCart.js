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
  console.log(cartItems);
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

      <div className="fixed top-4 lg:top-1/2 left-1/2 transform lg:-translate-y-1/2 -translate-x-1/2 w-[95vw] lg:w-[90vw] max-w-[1200px] max-h-[95vh] lg:max-h-[80vh] bg-white rounded-xl shadow-2xl z-[1001] overflow-hidden flex flex-col border border-black">
        <div className="flex justify-between items-center p-4 lg:p-5 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            {showOrderDetails && (
              <button
                className="bg-transparent border-none cursor-pointer p-1 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200 lg:hidden"
                onClick={handleBackToCart}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 m-0">
              {showOrderDetails ? "Order Details" : "Shopping Cart"}
            </h2>
          </div>
          <button
            className="bg-transparent border-none cursor-pointer p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
            onClick={handleClose}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Layout - Show both sections side by side */}
        <div className="hidden lg:grid grid-cols-2 gap-0 h-[calc(90vh-80px)] overflow-hidden">
          {/* Left Section - Order Details */}
          <OrderDetailsSection total={total} />

          {/* Right Section - Cart Items */}
          <div className="p-6 border-l border-gray-200 flex flex-col overflow-y-scroll">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md lg:text-xl font-semibold text-gray-900 m-0">
                Your Cart
              </h3>
              <button
                className="bg-transparent border-none text-gray-500 text-sm cursor-pointer px-2 py-1 rounded hover:text-red-700 hover:bg-red-100 transition-all duration-200"
                onClick={onClear}
              >
                Clear
              </button>
            </div>

            <div className="flex-1 overflow-y-auto flex flex-col gap-4">
              {uniqueCart.length > 0 ? (
                uniqueCart.map((item, index) => (
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
          </div>
        </div>

        {/* Mobile Layout - Whole Section Scrollable with extra bottom padding */}
        <div className="lg:hidden max-h-[95vh] w-full bg-white rounded-xl shadow-2xl overflow-y-auto">
          {!showOrderDetails ? (
            <>
              {/* Header */}
              <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
                <h3 className="text-lg font-semibold text-gray-900">
                  Your Cart
                </h3>
                <button
                  className="bg-transparent border-none text-gray-500 text-sm cursor-pointer px-2 py-1 rounded transition-all duration-200"
                  onClick={onClear}
                >
                  Clear
                </button>
              </div>

              {/* Cart Items */}
              <div className="p-4 flex flex-col gap-2">
                {uniqueCart.length > 0 ? (
                  uniqueCart.map((item, index) => (
                    <CartProductItem
                      key={index}
                      item={item}
                      onRemove={onRemove}
                    />
                  ))
                ) : (
                  <div className="flex items-center justify-center h-48 text-gray-500 text-base">
                    <p>Your cart is empty</p>
                  </div>
                )}
              </div>

              {/* Checkout Button */}
              {cartItems.length > 0 && (
                <div className="p-4 border-t border-gray-200 bg-white pb-20">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-sm"
                    onClick={handleProceedToCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              )}
            </>
          ) : (
            /* Order Details Step */
            <div className="p-4 flex flex-col gap-4 pb-20">
              <OrderDetailsSection total={total} />
            </div>
          )}
        </div>
      </div>
      {/* <CartComponent /> */}
    </>
  );
}
