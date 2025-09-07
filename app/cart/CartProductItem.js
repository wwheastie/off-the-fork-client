"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function CartProductItem({ item, onRemove }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      // Ask for confirmation before removing item
      const confirmed = window.confirm(
        `Are you sure you want to remove "${item.name}" from your cart?`
      );
      if (confirmed) {
        // Remove item from cart
        if (onRemove) {
          onRemove(item.id);
        }
      }
      // If not confirmed, keep the current quantity
      return;
    }

    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.id);
    }
  };

  return (
    <div className="flex flex-row gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg bg-white transition-all duration-200 hover:shadow-sm">
      {/* Product Image */}
      <div className="flex-shrink-0 self-center sm:self-start">
        <Image
          src={item.image || "/placeholder-food.svg"}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-md object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 text-left">
        <h4 className="text-md font-semibold text-gray-900 mb-2 leading-tight">
          {item.name}
        </h4>
        <p className="text-xs sm:text-sm text-gray-500 mb-3 leading-relaxed line-clamp-2">
          {item.description ||
            "This is a short paragraph to give a small description of the dish, ingredients, and any data that could be useful to users."}
        </p>
        <div className="text-sm sm:text-base font-semibold text-gray-900">
          ${item.price.toFixed(2)}
        </div>
      </div>

      {/* Interaction Elements */}
      <div className="flex flex-col gap-2 sm:gap-3 lg:items-center items-end flex-shrink-0">
        {/* Quantity Control */}
        <div className="flex flex-col h-full items-center justify-between gap-1">
          <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 border border-gray-300 rounded-full bg-gray-50">
            {/* Remove Item Button */}
            <button
              className={`p-1 rounded transition-all duration-200 flex items-center justify-center hover:cursor-pointer ${
                quantity === 1 ? "text-red-600" : "text-gray-500"
              }`}
              onClick={() => handleQuantityChange(quantity - 1)}
              title={
                quantity === 1 ? "Click to remove item" : "Decrease quantity"
              }
            >
              <svg
                width="14"
                height="14"
                className="sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="text-xs sm:text-sm font-medium min-w-[16px] sm:min-w-[20px] text-center text-gray-700">
              {quantity}
            </span>
            <button
              className="bg-transparent border-none cursor-pointer p-1 rounded text-gray-500 hover:text-gray-700 transition-all duration-200 flex items-center justify-center"
              onClick={() => handleQuantityChange(quantity + 1)}
              title="Increase quantity"
            >
              <svg
                width="14"
                height="14"
                className="sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Add Note Button */}
        <button className="bg-transparent border border-gray-700 rounded-sm px-2 py-1.5 sm:py-2 text-xs md:text-sm text-gray-700 cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
          <svg
            width="14"
            height="14"
            className="sm:w-4 sm:h-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-semibold">Note</span>
        </button>
      </div>
    </div>
  );
}
