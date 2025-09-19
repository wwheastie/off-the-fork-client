"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import YourCartComponent from "./YourCartComponent";
import YourDetailsComponent from "./YourDetailsComponent";
import MobileDetailsComponent from "./MobileDetailsComponent";

function CartComponent({ onClose }) {
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  return (
    <div className="fixed h-200 md:h-180 top-4 lg:top-1/2 left-1/2 transform lg:-translate-y-1/2 -translate-x-1/2 w-[95vw] lg:w-[90vw] max-w-[1200px] max-h-[95vh] lg:max-h-[80vh] bg-white rounded-xl shadow-2xl z-[1001] overflow-hidden flex flex-col bg-white text-black">
      <div className="flex justify-between px-6 py-4 bg-gray-100 w-full border border-gray">
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 m-0">
          {showOrderDetails ? "Order Details" : "Shopping Cart"}
        </h2>
        <button
          className="bg-transparent border-none cursor-pointer p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
          onClick={onClose}
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
      <div className="p-2  flex flex-col flex-col-reverse md:grid grid-cols-2 w-full">
        <div className="">
          <div className="hidden md:block">
            <YourDetailsComponent />
          </div>
          <div className="md:hidden">
            <MobileDetailsComponent />
          </div>

          <Button className="bg-orange-600 ml-6 text-md">
            Proceed To Payment
          </Button>
        </div>{" "}
        <YourCartComponent />
      </div>
    </div>
  );
}

export default CartComponent;
