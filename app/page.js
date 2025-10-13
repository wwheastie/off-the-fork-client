"use client";
import { useEffect, useRef, useState } from "react";
import DishesList from "./components/DishesList/DishesList";
import Landing from "./components/landing/Landing";
import { mockData } from "./context/mockData";
import HowItWorks from "@/app/components/HowItWorks/HowItWorks.js";

export default function Home() {
  const [meals, setMeals] = useState(null);

  return (
    <div>
      <Landing />
      <HowItWorks />
      <DishesList />
    </div>
  );
}
