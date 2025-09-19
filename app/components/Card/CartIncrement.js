"use client";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import minusicon from "./minusicon.png";
import plusicon from "./plusicon.png";
import Image from "next/image";
import { setQuantityByIdInPlace } from "@/app/context/mockData";

export default function CartIncrement({ info }) {
  console.log("hey", info.quantity);
  const { setCartCount, setCart, cart } = useContext(GlobalContext);
  const initialQty = Number(info.quantity ?? 0);
  const [qty, setQty] = useState(initialQty);
  const [showQty, setShowQty] = useState(initialQty > 0);
  const MAX = 9;
  const atMax = Number(qty || 0) >= MAX;
  const addNCopies = (n) => {
    console.log("hey", info.quantity);
  };

  const revealOrIncrement = () => {
    setShowQty(true);
    const newQty = (qty ?? 0) + 1;
    setQty(newQty);

    // mutate in place, then swap in a new array reference
    setQuantityByIdInPlace(cart, info, newQty, info.id);
    const nextCart = [...cart]; // new reference
    setCart(nextCart);

    // sum of quantities
    const totalUnits = nextCart.reduce(
      (sum, item) => sum + (Number(item?.quantity ?? item?.qty ?? 0) || 0),
      0
    );
    setCartCount(totalUnits);

    console.log("updated Cart:", nextCart);
  };

  const hideOrDecrement = () => {
    if (qty === 0) return;

    const newQty = qty - 1;
    if (newQty === 0) setShowQty(false);
    setQty(newQty);

    // mutate in place, then swap in a new array reference
    setQuantityByIdInPlace(cart, info, newQty, info.id);
    const nextCart = [...cart]; // new reference
    setCart(nextCart);

    // sum of quantities
    const totalUnits = nextCart.reduce(
      (sum, item) => sum + (Number(item?.quantity ?? item?.qty ?? 0) || 0),
      0
    );
    setCartCount(totalUnits);

    console.log("updated Cart:", nextCart);
  };

  const handleChange = (e) => {
    console.log("handle change");
  };

  const handleBlur = () => {
    console.log("handle blue");
  };

  const handleKeyDown = (e) => {
    console.log("key down");
  };

  useEffect(() => {
    // normalize and clamp to 0..9 (optional: keep your MAX)
    let next = Number(info?.quantity ?? 0);
    if (!Number.isFinite(next) || next < 0) next = 0;
    if (next > 9) next = 9;

    // only update local state if it actually changed
    setQty((prev) => (prev !== next ? next : prev));
    setShowQty(next > 0);
  }, [info?.id, info?.quantity]);

  return (
    <div className="flex items-center gap-2">
      {showQty && (
        <>
          <div
            className={`bg-orange-500 rounded-full w-7 h-7 flex justify-center items-center ${
              atMax && showQty
                ? "opacity-50 pointer-events-none"
                : "cursor-pointer"
            }`}
            onClick={hideOrDecrement}
            role="button"
            aria-label="Increase quantity"
          >
            <Image
              src={minusicon}
              alt="Add"
              width={12}
              height={12}
              className="h-3 w-3"
              priority
            />
          </div>
          <Input
            className="w-14 h-8 text-center"
            type="number"
            inputMode="numeric"
            min={0}
            max={9}
            step={1}
            value={qty}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </>
      )}

      <div
        className={`bg-orange-500 rounded-full w-7 h-7 flex justify-center items-center ${
          atMax && showQty ? "opacity-50 pointer-events-none" : "cursor-pointer"
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
  );
}
