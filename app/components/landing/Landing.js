import React from "react";
import "./Landing.css";
import Image from "next/image";
import Hero from "./Hero.png"; // ✅ import the image
import LandingContent from "./LandingContent";

export default function Landing() {
  return (
    <div className="landing-container grid grid-rows-[3fr_2fr] md:grid-rows-[1fr] md:grid-cols-[1fr_1fr]">
      <div className="landing-content-container hidden md:flex">
        <LandingContent />
      </div>
      <div className="relative h-full md:h-[500px]">
        {/* At < md: no radius; md+: bottom-left radius */}
        <div className="absolute inset-0 overflow-hidden md:rounded-bl-3xl">
          <Image
            src={Hero}
            alt="People enjoying healthy food"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 540px, (min-width: 768px) 60vw, 100vw"
          />
        </div>
      </div>

      <div className="landing-content-container flex md:hidden ">
        {" "}
        <LandingContent />
      </div>
    </div>
  );
}
