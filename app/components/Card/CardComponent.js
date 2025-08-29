"use client";
import * as React from "react";

import SingleCard from "./SingleCard";
import SingleCardV2 from "./SingleCardV2";

export function CardComponent({ data }) {
  console.log("card component:", data);
  return (
    <div className="component-container md:w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-3 ">
      {" "}
      {data?.map((meal) => (
        <div key={meal.id}>
          {/* <SingleCardV2 info={meal} /> */}
          <SingleCard info={meal} />
        </div>
      ))}
    </div>
  );
}
