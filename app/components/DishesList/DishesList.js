import React from "react";
import "./DishesList.css";
import { CardComponent } from "../Card/CardComponent";

export default function DishesList({ info }) {
  return (
    <div className="">
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
      <CardComponent data={info?.mealsList} />
    </div>
  );
}
