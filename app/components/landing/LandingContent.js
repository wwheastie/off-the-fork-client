import React from "react";
import checkmark from "./checkmark.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function LandingContent() {
  const items = [
    {
      title: "Best Solution for eating healthy without worrying about cooking",
    },
    {
      title: "Start now, schedule whenever you want",
    },
  ];
  return (
    <div className="landing-content">
      <div className="text-3xl font-extrabold text-orange-600">
        The Best Subscription to Eat Healthy
      </div>
      <div className="text-xl">
        A subscription 100% adopted for you{" "}
        <span className="hidden md:block">
          by high-quality food cooked by our specialized chefs.
        </span>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          {" "}
          <Image
            src={checkmark}
            alt="Site Logo"
            width={50}
            height={10}
            priority
            className=" w-6"
          />
          <div>{item.title}</div>
        </div>
      ))}

      <div className="flex gap-3">
        <Button className="bg-orange-600 ">See Our Dishes</Button>
        <Button className="bg-white text-black border">See Our Dishes</Button>
      </div>
    </div>
  );
}
