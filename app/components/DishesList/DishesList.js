import React from "react";
import "./DishesList.css";
import { CardComponent } from "../Card/CardComponent";

export default function DishesList() {
  return (
    <div className="dishes-container">
      <div className="">
        <div className="text-3xl md:text-4xl text-black font-bold mb-2">
          Our Dishes
        </div>
        <div className="text-xl">
          We keep a constant rotation of products to keep our options fresh
        </div>
      </div>
      <CardComponent />
    </div>
  );
}
