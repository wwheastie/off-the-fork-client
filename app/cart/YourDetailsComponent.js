"use client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function YourDetailsComponent() {
  const { buyerInfo, setBuyerInfo } = useContext(GlobalContext);
  const [expandedSections, setExpandedSections] = useState({
    personal: false,
    delivery: false,
    payment: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => {
      const nextOpen = !prev[section];
      const allFalse = Object.fromEntries(
        Object.keys(prev).map((k) => [k, false])
      );
      return { ...allFalse, [section]: nextOpen };
    });
  };

  // Generic updater for all inputs
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setBuyerInfo((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  return (
    <div className="h-80 md:h-140 lg:h-136 border-r border-gray">
      <div className="p-4 lg:p-6 flex flex-col gap-4 lg:gap-4 overflow-y-auto">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 pb-3 border-b border-gray-200">
          Buyer Details
        </h3>

        {/* Personal Information */}
        <div className="border border-gray-200 rounded-sm transition-all duration-200 hover:border-gray-300">
          <div
            className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 cursor-pointer transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50"
            onClick={() => toggleSection("personal")}
          >
            <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-lg text-gray-500 flex-shrink-0">
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5"
                viewBox="0 0 24 24"
                fill="none"
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
            <div className="p-4 lg:p-5 bg-gray-50 border-t border-gray-200 grid grid-cols-2 gap-2">
              <div className="mb-3 lg:mb-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={buyerInfo.firstName}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="mb-3 lg:mb-4">
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={buyerInfo.lastName}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="mb-3 lg:mb-4">
                <input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={buyerInfo.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="mb-3 lg:mb-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={buyerInfo.email}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>
          )}
        </div>

        {/* Delivery Address */}
        <div className="border border-gray-200 rounded-sm transition-all duration-200 hover:border-gray-300">
          <div
            className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 cursor-pointer transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50"
            onClick={() => toggleSection("delivery")}
          >
            <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-lg text-gray-500 flex-shrink-0">
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5"
                viewBox="0 0 24 24"
                fill="none"
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
            <div className="p-4 lg:p-5 bg-gray-50 border-t border-gray-200 grid grid-cols-2 gap-2">
              <div className="mb-3 lg:mb-4">
                <input
                  name="streetAddress"
                  type="text"
                  placeholder="Street Address"
                  value={buyerInfo.streetAddress}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="lg:mb-4">
                <input
                  name="unit"
                  type="number"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  value={buyerInfo.unit}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="mb-3 lg:mb-4">
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={buyerInfo.city}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="mb-3 lg:mb-4">
                <input
                  name="state"
                  type="text"
                  placeholder="State"
                  value={buyerInfo.state}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="mb-3 lg:mb-4">
                <input
                  name="postalCode"
                  type="text"
                  placeholder="Postal Code"
                  value={buyerInfo.postalCode}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YourDetailsComponent;
