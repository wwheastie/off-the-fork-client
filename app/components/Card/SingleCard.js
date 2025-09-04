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

export default function SingleCard({ info }) {
  const { setCartCount } = useContext(GlobalContext);
  const [qty, setQty] = useState(1);
  const [showQty, setShowQty] = useState(false);
  const prevQtyRef = useRef(1);
  const MAX = 9;

  const applyDelta = (nextQty) => {
    const prev = Number(prevQtyRef.current || 1);
    const next = Number(nextQty || 0);
    const delta = next - prev;
    if (delta !== 0) setCartCount((c) => Math.max(0, c + delta));
    prevQtyRef.current = next;
  };
  const atMax = Number(qty || 1) >= MAX; // ✅ define atMax

  const revealOrIncrement = () => {
    if (!showQty) {
      setShowQty(true);
      // first reveal doesn’t change qty (still 1), so no delta
      prevQtyRef.current = 1;
      return;
    }
    if (atMax) return; // ✅ no more increments
    setQty((prev) => {
      const base = Number(prev || 1);
      const next = Math.min(MAX, base + 1);
      applyDelta(next);
      return next;
    });
  };

  const hideInputReset = () => {
    // user removed the item: decrease cart by current qty then hide
    applyDelta(0);
    setShowQty(false);
    setQty(1);
    prevQtyRef.current = 1; // reset baseline
  };

  const handleChange = (e) => {
    const raw = e.target.value;
    if (raw === "") {
      // let user clear temporarily; don’t change cart until they settle
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
      setQty(1);
      // if empty -> 1, adjust delta back to 1
      applyDelta(1);
    }
  };

  const handleKeyDown = (e) => {
    // If user tries to ArrowDown at 1, hide input instead of going to 0/negative
    if (e.key === "ArrowDown" || e.key === "Down") {
      const current = Number(qty || 1);
      if (current <= 1) {
        e.preventDefault();
        hideInputReset();
      }
    }
  };

  return (
    <div className="w-full">
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
            <div className="flex gap-2 items-center">
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

            <div className="flex items-center gap-2">
              {showQty && (
                <Input
                  className="w-14 h-8 text-center"
                  type="number"
                  inputMode="numeric"
                  // Allow decrement to 0 so we can detect and hide
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
