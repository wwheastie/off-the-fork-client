import React from "react";
import checkmark from "./checkmark.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function LandingContent() {
  const items = [
    {
      title: "Best solution for eating healthy without worrying about cooking.",
    },
    {
      title: "Start now, schedule whenever you want",
    },
  ];
  return (
    <div className="p-2 pt-8 md: landing-content">
      <div className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-orange-600">
        The Best Subscription to Eat Healthy
      </div>
      <div className=" text-gray-500 text-md md:text-lg font-semibold">
        A Subscription 100% Adopted for You<span className="md:hidden">.</span>
        <span className="hidden md:block">
          by high-quality food cooked by our specialized chefs.
        </span>
      </div>
      <div>
        {" "}
        {items.map((item, index) => (
          <div key={index} className="flex gap-1 items-center">
            {" "}
            <Image
              src={checkmark}
              alt="Site Logo"
              width={50}
              height={10}
              priority
              className="w-auto h-8"
            />
            <div className="text-sm md:text-md">{item.title}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button className="bg-orange-600 ">See Our Dishes</Button>
        <Button className="bg-white text-black border">See Our Dishes</Button>
      </div>
    </div>
  );
}
