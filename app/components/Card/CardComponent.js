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
import SingleCard from "./SingleCard";

export function CardComponent() {
  return (
    <div className="component-container md:w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-3 ">
      {" "}
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </div>
  );
}
