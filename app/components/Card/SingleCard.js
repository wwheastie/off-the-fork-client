import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { AspectRatio } from "../../../components/ui/aspect-ratio";
import Image from "next/image";
import Hero from "./Hero.png";

export default function SingleCard() {
  return (
    <div>
      {" "}
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={Hero}
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>

          <CardTitle className="text-md md:text-lg text-left">
            Dish name goes here
          </CardTitle>
          <CardDescription className="text-sm text-left">
            Card Description
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
