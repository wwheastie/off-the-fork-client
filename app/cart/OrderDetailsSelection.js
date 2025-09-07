import React, { useState } from "react";
import { Button } from "../../../components/ui/button";

export default function OrderDetailsSection({ total }) {
  const [selectedTip, setSelectedTip] = useState(0);
  const [expandedSections, setExpandedSections] = useState({
    personal: false,
    delivery: false,
    payment: false,
  });

  const tipOptions = [0, 5, 10, 15];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const calculateTip = () => {
    return (total * selectedTip) / 100;
  };

  const finalTotal = total + calculateTip();

  return (
    <div className="p-4 lg:p-6 flex flex-col gap-4 lg:gap-4 overflow-y-auto">
      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 pb-3 border-b border-gray-200">
        Order Details
      </h3>

      {/* Personal Information */}
      <div className="border border-gray-200 rounded-sm overflow-hidden transition-all duration-200 hover:border-gray-300">
        <div
          className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 cursor-pointer transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50"
          onClick={() => toggleSection("personal")}
        >
          <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-lg text-gray-500 flex-shrink-0">
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
              Personal Information
            </h4>
            <p className="text-xs lg:text-sm text-gray-500 m-0">
              Add your name, phone number, and email
            </p>
          </div>
          <button className="bg-transparent border-none cursor-pointer p-1.5 lg:p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200 flex items-center justify-center">
            <svg
              className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200 ${
                expandedSections.personal ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {expandedSections.personal && (
          <div className="p-4 lg:p-5 bg-gray-50 border-t border-gray-200">
            <div className="mb-3 lg:mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <div className="mb-3 lg:mb-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <div className="mb-3 lg:mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>
        )}
      </div>

      {/* Delivery Address */}
      <div className="border border-gray-200 rounded-sm overflow-hidden transition-all duration-200 hover:border-gray-300">
        <div
          className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 cursor-pointer transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50"
          onClick={() => toggleSection("delivery")}
        >
          <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-lg text-gray-500 flex-shrink-0">
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
              Delivery Address
            </h4>
            <p className="text-xs lg:text-sm text-gray-500 m-0">
              Add a delivery address
            </p>
          </div>
          <button className="bg-transparent border-none cursor-pointer p-1.5 lg:p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200 flex items-center justify-center">
            <svg
              className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200 ${
                expandedSections.delivery ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {expandedSections.delivery && (
          <div className="p-4 lg:p-5 bg-gray-50 border-t border-gray-200">
            <div className="mb-3 lg:mb-4">
              <input
                type="text"
                placeholder="Street Address"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <div className="mb-3 lg:mb-4">
              <input
                type="text"
                placeholder="City"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <div className="mb-3 lg:mb-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>
        )}
      </div>

      {/* Payment Method */}
      <div className="border border-gray-200 rounded-sm overflow-hidden transition-all duration-200 hover:border-gray-300">
        <div
          className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 cursor-pointer transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50"
          onClick={() => toggleSection("payment")}
        >
          <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-lg text-gray-500 flex-shrink-0">
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="4"
                width="22"
                height="16"
                rx="2"
                ry="2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="1"
                y1="10"
                x2="23"
                y2="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
              Payment Method
            </h4>
            <p className="text-xs lg:text-sm text-gray-500 m-0">
              Add a payment method
            </p>
          </div>
          <button className="bg-transparent border-none cursor-pointer p-1.5 lg:p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200 flex items-center justify-center">
            <svg
              className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200 ${
                expandedSections.payment ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {expandedSections.payment && (
          <div className="p-4 lg:p-5 bg-gray-50 border-t border-gray-200">
            <div className="mb-3 lg:mb-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
              <div className="mb-3 lg:mb-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="mb-3 lg:mb-4">
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Order Tip */}
      <div className="py-4 lg:py-5">
        <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-3 lg:mb-4">
          Order tip
        </h4>
        <div className="flex gap-2 lg:gap-3 flex-wrap">
          {tipOptions.map((tip) => (
            <button
              key={tip}
              className={`px-3 lg:px-5 py-2 lg:py-2.5 border border-gray-300 rounded-full text-xs lg:text-sm font-medium cursor-pointer transition-all duration-200 min-w-[50px] lg:min-w-[60px] ${
                selectedTip === tip
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:border-gray-400"
              }`}
              onClick={() => setSelectedTip(tip)}
            >
              {tip}%
            </button>
          ))}
        </div>
      </div>

      {/* Total and Pay Button */}
      <div className="mt-auto pt-4 lg:pt-5 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4 lg:mb-5">
          <span className="text-base lg:text-lg font-semibold text-gray-900">
            TOTAL
          </span>
          <span className="text-lg lg:text-xl font-semibold text-gray-900">
            ${finalTotal.toFixed(2)}
          </span>
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 lg:py-4 px-4 lg:px-6 text-sm lg:text-base rounded-sm border-none cursor-pointer transition-all duration-200 hover:shadow-lg">
          Pay to order
        </Button>
      </div>
    </div>
  );
}
