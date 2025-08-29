"use client";
import { useEffect, useState } from "react";
import DishesList from "./components/DishesList/DishesList";
import Landing from "./components/landing/Landing";

export default function Home() {
  const [meals, setMeals] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const res = await fetch("/api/meals", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        let newData = { timeStamp: "today", mealsList: data };
        setMeals(newData);
        setLoadingState(false);
        // console.log("data fetched:", data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchMeals(); // runs once on component mount
  }, []);

  return (
    <div>
      <Landing />
      <DishesList info={meals} loading={loadingState} />
    </div>
  );
}
