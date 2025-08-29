"use client";
import React, { useState } from "react";
import { useEffect } from "react";

// rfc
export default function About() {
  useEffect(() => {
    async function fetchMeals() {
      try {
        const res = await fetch("/api/meals", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        console.log("data fetched:", data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchMeals(); // runs once on component mount
  }, []);
  return <div>About</div>;
}
