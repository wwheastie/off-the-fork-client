"use client";
import React, { useContext, useMemo } from "react";
import SingleCard from "./SingleCard";
import { GlobalContext } from "@/app/context/GlobalContext";

export function CardComponent({ data = [] }) {
  // Helper: get a stable string id from various shapes (id or mealId)

  return (
    <div className="component-container md:w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-3">
      {data.map((meal) => (
        <div key={meal.id}>
          <SingleCard info={meal} />
        </div>
      ))}
    </div>
  );
}
