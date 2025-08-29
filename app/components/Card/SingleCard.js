import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Button } from "@/components/ui/button";
import StandardButton from "../StandardButton/StandardButton";

export default function SingleCard({ info }) {
  const buttonInfo = { title: "Add" };
  return (
    <div className="w-full">
      {" "}
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <AspectRatio ratio={16 / 9} className="bg-muted relative">
            <Image
              src={info?.imageUrl}
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-md object-cover"
            />
            <div className="absolute bottom-3 left-3 flex max-w-full flex-wrap gap-2">
              {info?.tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="border border-white/10 bg-white text-black backdrop-blur-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </AspectRatio>
          <CardTitle className="text-md md:text-lg text-left  flex justify-between">
            <>{info?.name}</>
          </CardTitle>
          <CardDescription className="text-sm text-left">
            {info?.description}
          </CardDescription>{" "}
          <div className="flex justify-between">
            <div className="flex gap-2">
              {" "}
              <Image
                src={infoicon}
                alt="Site Logo"
                width={50}
                height={10}
                priority
                className="w-auto h-5"
              />{" "}
              <div className="text-gray-500 text-sm underline">
                Nutritional Details
              </div>
            </div>{" "}
            <div className="bg-orange-500 rounded-full w-6 h-6 flex justify-center items-center align-center">
              <Image
                src={plusicon}
                alt="Site Logo"
                width={50}
                height={10}
                priority
                className="w-auto h-3"
              />{" "}
            </div>
          </div>
        </CardHeader>
        <CardFooter className=" flex justify-between">
          <div className="bold text-lg">{info.price}$</div>
          <StandardButton info={buttonInfo} />
        </CardFooter>
      </Card>
    </div>
  );
}
