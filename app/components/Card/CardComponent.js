"use client";
import * as React from "react";
import Hero from "./Hero.png";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

import Link from "next/link";
import { AspectRatio } from "../../../components/ui/aspect-ratio";
import Image from "next/image";

export function CardComponent({ data, directory }) {
  const [infoDirectory, setInfoDirectory] = React.useState("leagues");

  React.useEffect(() => {
    if (directory) {
      setInfoDirectory(directory);
    }
  }, [data]);

  return (
    <div className="component-container grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:p-3">
      {" "}
      {data?.map((dat, index) => (
        <Card key={index} className="flex flex-col justify-between">
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
              Card Title
            </CardTitle>
            <CardDescription className="text-sm text-left">
              Card Description
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
      <div> </div>
    </div>
  );
}
