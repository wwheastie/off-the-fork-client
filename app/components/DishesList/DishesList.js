"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import "./DishesList.css";
import { CardComponent } from "../Card/CardComponent";
import { SkeletonCard } from "../Skeleton/skeleton";
import { GlobalContext } from "@/app/context/GlobalContext";
import { mockData } from "@/app/context/mockData";

export default function DishesList() {
  const { cart } = useContext(GlobalContext);
  const [rawMeals, setRawMeals] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  // Fetch meals once
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/meals", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        if (!cancelled) {
          // support either an array or { mealsList: [...] }
          const base = Array.isArray(data) ? data : data?.mealsList ?? [];
          setRawMeals(base);
        }
      } catch {
        if (!cancelled) setRawMeals(mockData);
      } finally {
        if (!cancelled) setLoadingState(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Recompute annotated meals whenever cart OR rawMeals changes
  const meals = useMemo(() => {
    console.log("triggered again");
    return rawMeals.map((item) => {
      const match = cart.find((m) => m.id === item.id);
      const Qty = Number(match?.quantity ?? match?.qty ?? 0);
      return { ...item, quantity: Qty, note: "" };
    });
  }, [rawMeals, cart]);

  return (
    <div className="mt-20">
      <div className="component-container">
        <div className="text-2xl md:text-3xl text-black font-bold mb-2">
          Our Dishes
        </div>
        <div className="text-gray-500 text-md md:text-lg font-semibold mb-2">
          We keep a constant rotation of products to keep our options fresh
          <br />
          Remember to keep an eye out.
        </div>
      </div>

      {loadingState ? (
        <div className="component-container md:w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <CardComponent data={meals} />
      )}
    </div>
  );
}
