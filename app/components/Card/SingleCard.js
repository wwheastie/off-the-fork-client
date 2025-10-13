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
import { Badge } from "../../../components/ui/badge";
import Nutrition from "./Nutrition";
import CartIncrement from "./CartIncrement";

export default function SingleCard({ info }) {
  const { quantity: _omit, ...mealCore } = info ?? {};

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
            <div>${info?.price.toFixed(2)}</div>
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

            <CartIncrement info={info} />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
