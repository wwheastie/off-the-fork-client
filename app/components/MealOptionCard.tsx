import React from "react";
import CircularTag from "~/components/CircularTag";

const MealOptionCard = ({ image, title, description }) => {
    return (
        <div className="card bg-base-100 shadow-md">
            <div className="flex items-start p-4 gap-4">
                {/* Image on the left */}
                <img
                    src={image}
                    alt={title}
                    className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Content on the right */}
                <div>
                    <h2 className="text-lg font-bold mb-1">{title}</h2>
                    <p className="text-sm text-base-content/70">{description}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                        <CircularTag name={"Vegan"}/>
                        <CircularTag name={"Gluten Free"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealOptionCard;
