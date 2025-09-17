"use client";
import React, { useContext, useMemo } from "react";
import SingleCard from "./SingleCard";
import { GlobalContext } from "@/app/context/GlobalContext";

export function CardComponent({ data = [] }) {
  const { cart } = useContext(GlobalContext);

  // Helper: get a stable string id from various shapes (id or mealId)
  const getId = (obj) => {
    const raw = obj?.id ?? obj?.mealId;
    return raw != null ? String(raw) : null;
  };

  // Build: id -> total qty
  const qtyMap = useMemo(() => {
    const map = new Map();
    for (const item of cart ?? []) {
      const id = getId(item);
      if (!id) continue;
      const inc =
        item?.qty != null
          ? Number(item.qty)
          : item?.quantity != null
          ? Number(item.quantity)
          : 1;
      const prev = map.get(id) || 0;
      map.set(id, prev + (Number.isFinite(inc) ? inc : 0));
    }
    return map;
  }, [cart]);

  // Enrich meals with quantity using their id
  const mealsWithQty = useMemo(() => {
    return (Array.isArray(data) ? data : []).map((m) => {
      const id = getId(m);
      return {
        ...m,
        quantity: id ? qtyMap.get(id) || 0 : 0,
      };
    });
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
