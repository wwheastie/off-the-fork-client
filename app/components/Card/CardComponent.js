"use client";
import React, { useContext, useMemo } from "react";
import SingleCard from "./SingleCard";
import { GlobalContext } from "@/app/context/GlobalContext";

export function CardComponent({ data = [] }) {
  const { cart } = useContext(GlobalContext);
  // Helper: normalize names so lookups are consistent
  const normalizeName = (x) => {
    const name = typeof x === "string" ? x : x?.name ?? x?.mealName ?? x?.title;
    return (name || "").trim().toLowerCase().replace(/\s+/g, " ");
  };

  // Build: name -> total qty
  const qtyMap = useMemo(() => {
    const map = new Map();
    for (const item of cart ?? []) {
      const key = normalizeName(item);
      if (!key) continue;
      const inc = item.qty != null ? item.qty : 1;
      map.set(key, (map.get(key) || 0) + inc);
    }
    return map;
  }, [cart]);

  // When enriching meals:
  const mealsWithQty = useMemo(() => {
    return (data ?? []).map((m) => ({
      ...m,
      quantity: qtyMap.get(normalizeName(m)) || 0,
    }));
  }, [data, qtyMap]);

  return (
    <div className="component-container md:w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-3">
      {mealsWithQty.map((meal) => (
        <div key={meal.id ?? meal.mealId}>
          <SingleCard info={meal} />
        </div>
      ))}
    </div>
  );
}
