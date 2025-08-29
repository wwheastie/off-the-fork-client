import React from "react";
import "./DishesList.css";
import { CardComponent } from "../Card/CardComponent";
import { SkeletonCard } from "../Skeleton/skeleton";

export default function DishesList({ info, loading }) {
  return (
    <div className="mt-20">
      <div className="component-container">
        <div className="text-2xl md:text-3xl text-black font-bold mb-2">
          Our Dishes
        </div>
        <div className=" text-gray-500 text-md md:text-lg font-semibold mb-2">
          We keep a constant rotation of products to keep our options fresh{" "}
          <br />
          Remember to keep an eye out.
        </div>
      </div>
      {loading ? (
        <div className="component-container md:w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <CardComponent data={info?.mealsList} />
      )}
    </div>
  );
}
