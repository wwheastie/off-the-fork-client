import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { AspectRatio } from "../../../components/ui/aspect-ratio";
import Image from "next/image";
import Hero from "./Hero.png";
import infoicon from "./infoicon.png";
import plusicon from "./plusicon.png";
import { Badge } from "../../../components/ui/badge";
import StandardButton from "../StandardButton/StandardButton";

export default function SingleCardV2({ info = {} }) {
  const buttonInfo = { title: "Add" };
  const { name, description, imageUrl, tags = [], price } = info || {};

  // Simple price formatter fallback
  const formattedPrice =
    typeof price === "number"
      ? `$${price.toFixed(2)}`
      : price
      ? `$${price}`
      : "$—";

  return (
    <div className="w-full">
      <Card className="group overflow-hidden rounded-2xl border bg-card/60 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
        {/* Image header */}
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9} className="relative bg-muted">
            <Image
              src={imageUrl || Hero}
              alt={name ? `${name} image` : "Meal image"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(min-width: 768px) 600px, 100vw"
              priority={false}
            />
            {/* Gradient for legibility */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
            {/* Tags */}
            {tags?.length > 0 && (
              <div className="absolute bottom-3 left-3 flex max-w-full flex-wrap gap-2 pr-3">
                {tags.map((tag, i) => (
                  <Badge
                    key={`${tag}-${i}`}
                    className="border border-white/20 bg-white/90 text-black backdrop-blur supports-[backdrop-filter]:bg-white/60"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </AspectRatio>
        </CardHeader>

        {/* Main content */}
        <CardContent className="p-5 md:p-6 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-base md:text-lg leading-tight line-clamp-2">
              {name || "Untitled meal"}
            </CardTitle>

            {/* Compact add button (kept as your plus icon) */}
            <button
              type="button"
              aria-label="Add"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-orange-600 shadow-sm backdrop-blur transition-colors hover:bg-accent"
            >
              <Image
                src={plusicon}
                alt="Add"
                width={16}
                height={16}
                className="h-4 w-4"
                priority={false}
              />
            </button>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description || "No description available."}
          </p>

          {/* Info row */}
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
          >
            <Image
              src={infoicon}
              alt="Info"
              width={16}
              height={16}
              className="h-4 w-4"
              priority={false}
            />
            Nutritional details
          </button>
        </CardContent>

        {/* Footer */}
        <CardFooter className="p-5 pt-0 md:p-6 md:pt-0 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">
            {formattedPrice}
          </div>
          <div>
            {" "}
            <StandardButton info={buttonInfo} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
