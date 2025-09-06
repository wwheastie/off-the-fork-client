"use client";

import Image from "next/image";
import React, { useState } from "react";
import infoicon from "./infoicon.png";
import "./Cards.css";

export default function Nutrition({ calories, protein, fats, carbs }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      onClick={() => {
        setShowDetails(!showDetails);
      }}
      className="nutrition-container"
    >
      <div className="flex gap-2 items-center cursor-pointer">
        <Image
          src={infoicon}
          alt="Info"
          width={20}
          height={20}
          className="h-5 w-5"
          priority
        />

        <div className="text-gray-500 text-sm underline">
          Nutritional Details
        </div>
      </div>
      {showDetails && (
        <>
          {" "}
          <div className="flex flex-col items-left cursor-pointer text-xs font-semibold p-1 rounded">
            <div>Calories: {calories}</div>
            <div>Proteins: {protein}g</div>
            <div>Fats: {fats}</div>
            <div>Carbohydrates: {carbs}</div>
          </div>
        </>
      )}{" "}
    </div>
  );
}
