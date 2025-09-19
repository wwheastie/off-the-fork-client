"use client";
import { useEffect, useRef, useState } from "react";
import DishesList from "./components/DishesList/DishesList";
import Landing from "./components/landing/Landing";
import { mockData } from "./context/mockData";

export default function Home() {
  const [meals, setMeals] = useState(null);

  return (
    <div>
      <Landing />
      <DishesList />
    </div>
  );
}
