"use client";
import React from "react";
import { useEffect } from "react";

// rfc
export default function About() {
  useEffect(() => {
    async function fetchMeals() {
      try {
        const res = await fetch("/api/meals", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch meals");

        const data = await res.json();
        console.log("Meals fetched:", data);
      } catch (err) {
        console.error("Error fetching meals:", err);
      }
    }

    fetchMeals(); // runs once on component mount
  }, []);
  return <div>About</div>;
}
