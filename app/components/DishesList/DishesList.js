import React from "react";
import "./DishesList.css";
import { CardComponent } from "../Card/CardComponent";

export default function DishesList() {
  return (
    <div className="">
      <div className="component-container">
        <div className="text-2xl md:text-3xl text-black font-bold mb-2">
          Our Dishes
        </div>
        <div className="text-md md:text-xl mb-2">
          We keep a constant rotation of products to keep our options fresh
        </div>
      </div>
      <CardComponent />
    </div>
  );
}
