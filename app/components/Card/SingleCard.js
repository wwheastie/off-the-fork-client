"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { AspectRatio } from "../../../components/ui/aspect-ratio";
import Image from "next/image";

import infoicon from "./infoicon.png";
import plusicon from "./plusicon.png";
import { Badge } from "../../../components/ui/badge";
import { Input } from "@/components/ui/input";
import { GlobalContext } from "@/app/context/GlobalContext";
import Nutrition from "./Nutrition";

export default function SingleCard({ info }) {
  const context = useContext(GlobalContext);
  const { setCartCount, setCart, cart } = context || {};

  // Start from the quantity provided by parent (derived from cart)
  const initialQty = Number(info?.quantity ?? 0);
  const [qty, setQty] = useState(initialQty);
  const [showQty, setShowQty] = useState(initialQty > 0);
  const prevQtyRef = useRef(initialQty);
  const MAX = 9;

  // Build a "core" meal object without the quantity field
  const { quantity: _omit, ...mealCore } = info ?? {};
  const mealId = info?.id ?? info?.mealId; // adjust if your id key differs

  // Helpers to mutate the cart by id
  const addNCopies = (n) => {
    if (n <= 0) return;
    setCart((prev) => [...prev, ...Array(n).fill(mealCore)]);
  };

  const removeNCopiesById = (n) => {
    if (n <= 0) return;
    setCart((prev) => {
      let toRemove = n;
      // remove the first N items that match this meal's id (stable criteria)
      return prev.filter((item) => {
        const sameId = (item?.id ?? item?.mealId) === mealId; // adjust matching logic if needed
        if (sameId && toRemove > 0) {
          toRemove -= 1;
          return false; // drop this occurrence
        }
        return true;
      });
    });
  };

  // One function to apply a new qty: updates cartCount and cart together
  const applyDelta = (nextQty) => {
    const prev = Number(prevQtyRef.current || 0);
    const next = Number(nextQty || 0);
    const delta = next - prev;

    if (delta !== 0) {
      // update count
      if (setCartCount) {
        setCartCount((c) => Math.max(0, c + delta));
      }

      // update cart items (add or remove delta copies)
      if (delta > 0) addNCopies(delta);
      else removeNCopiesById(Math.abs(delta));
    }

    prevQtyRef.current = next;
  };

  const atMax = Number(qty || 0) >= MAX;

  const revealOrIncrement = () => {
    if (!showQty) {
      // First click: reveal and set qty to 1 ⇒ delta = 1 - 0
      setShowQty(true);
      setQty(1);
      prevQtyRef.current = 0; // baseline so first click counts as +1
      applyDelta(1);
      return;
    }

    if (atMax) return;

    setQty((prev) => {
      const base = Number(prev || 0);
      const next = Math.min(MAX, base + 1);
      applyDelta(next);
      return next;
    });
  };

  const hideInputReset = () => {
    // Set qty to 0 (remove all copies of this meal), then hide
    applyDelta(0);
    setShowQty(false);
    setQty(0);
    prevQtyRef.current = 0;
  };

  const handleChange = (e) => {
    const raw = e.target.value;
    if (raw === "") {
      setQty("");
      return;
    }
    const n = Math.floor(Number(raw));
    if (Number.isNaN(n)) return;

    if (n <= 0) {
      hideInputReset();
      return;
    }
    const clamped = Math.min(MAX, n);
    setQty(clamped);
    applyDelta(clamped);
  };

  const handleBlur = () => {
    if (qty === "" || Number(qty) < 1) {
      // If user clears, snap back to 1 and adjust delta accordingly
      setQty(1);
      applyDelta(1);
      setShowQty(true);
    }
  };

  const handleKeyDown = (e) => {
    // If user ArrowDown at 1, hide input instead of going 0/negative
    if (e.key === "ArrowDown" || e.key === "Down") {
      const current = Number(qty || 0);
      if (current <= 1) {
        e.preventDefault();
        hideInputReset();
      }
    }
  };

  return (
    <div className="w-full single-card-container">
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <AspectRatio ratio={16 / 9} className="bg-muted relative">
            <Image
              src={info?.imageUrl}
              alt={info?.name ?? "Meal image"}
              fill
              className="h-full w-full rounded-md object-cover"
            />
            <div className="absolute bottom-3 left-3 flex max-w-full flex-wrap gap-2">
              {info?.tags?.map((tag, index) => (
                <Badge
                  key={index}
                  className="border border-white/10 bg-white text-black backdrop-blur-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </AspectRatio>

          <CardTitle className="text-md md:text-lg text-left flex justify-between">
            <div>{info?.name}</div>
            <div>{info?.price}$</div>
          </CardTitle>

          <CardDescription className="text-sm text-left">
            {info?.description}
          </CardDescription>

          <div className="flex justify-between items-center">
            <Nutrition
              calories={info.calories}
              protein={info.protein}
              fats={info.fats}
              carbs={info.carbs}
            />

            <div className="flex items-center gap-2">
              {showQty && (
                <Input
                  className="w-14 h-8 text-center"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={MAX}
                  step={1}
                  value={qty}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                />
              )}

              <div
                className={`bg-orange-500 rounded-full w-7 h-7 flex justify-center items-center ${
                  atMax && showQty
                    ? "opacity-50 pointer-events-none"
                    : "cursor-pointer"
                }`}
                title={atMax && showQty ? "Maximum is 9" : "Add"}
                onClick={revealOrIncrement}
                role="button"
                aria-label="Increase quantity"
              >
                <Image
                  src={plusicon}
                  alt="Add"
                  width={12}
                  height={12}
                  className="h-3 w-3"
                  priority
                />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
