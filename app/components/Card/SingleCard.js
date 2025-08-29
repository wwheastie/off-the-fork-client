"use client";
import React, { useState } from "react";
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

export default function SingleCard({ info }) {
  const [qty, setQty] = useState(1);
  const [showQty, setShowQty] = useState(false);
  const MAX = 9; // still "smaller than 10"

  const revealOrIncrement = () => {
    if (!showQty) {
      setShowQty(true);
      return;
    }
    setQty((prev) => Math.min(MAX, Number(prev || 1) + 1));
  };

  const hideInputReset = () => {
    // Hide the input and reset qty to 1 for the next reveal
    setShowQty(false);
    setQty(1);
  };

  const handleChange = (e) => {
    const raw = e.target.value;

    // allow temporary empty while typing
    if (raw === "") {
      setQty("");
      return;
    }

    const n = Math.floor(Number(raw));
    if (Number.isNaN(n)) return;

    // If user decrements to 0 or types <= 0 → hide the input
    if (n <= 0) {
      hideInputReset();
      return;
    }

    // Clamp to [1, MAX]
    setQty(Math.min(MAX, n));
  };

  const handleBlur = () => {
    // resolve empty back to 1
    if (qty === "" || Number(qty) < 1) setQty(1);
  };

  const handleKeyDown = (e) => {
    // If they press ArrowDown at 1 (or empty treated as 1), hide
    if (e.key === "ArrowDown" || e.key === "Down") {
      const current = Number(qty || 1);
      if (current <= 1) {
        e.preventDefault();
        hideInputReset();
      }
    }
  };

  const atMax = Number(qty || 1) >= MAX;

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
