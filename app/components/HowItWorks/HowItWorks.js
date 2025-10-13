import Step from "@/app/components/HowItWorks/Step";
import React from "react";

export default function HowItWorks() {
    const step = {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qU1RipLrMymEUGdOmKIzh-UwhRJY0isTxg&s",
        title: "Choose Your Meals",
        description: "Browse our menu and select the dishes that fit your diet and taste preferences."
    }

    return (
        <div className="mt-20">
            <div className="component-container">
                <div className="text-2xl md:text-3xl text-black font-bold mb-2">
                    How it Works
                </div>
                <div className="text-gray-500 text-md md:text-lg font-semibold mb-2">
                    We keep a constant rotation of products to keep our options fresh
                    <br />
                    Remember to keep an eye out.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Step step={step}></Step>
                    <Step step={step}></Step>
                    <Step step={step}></Step>
                    <Step step={step}></Step>
                </div>
            </div>
        </div>
    )
}