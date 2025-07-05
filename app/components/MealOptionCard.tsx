import React, {useState} from "react";
import CircularTag from "~/components/CircularTag";
import type {Meal} from "~/types/Meal";

type MealOptionCardProps = {
    meal: Meal;
    quantity: number;
    onQuantityChange: (mealId: string, quantity: number) => void;
};

const MealOptionCard: React.FC<MealOptionCardProps> = ({ meal, quantity, onQuantityChange }) => {
    const { id, image, title, description, tags } = meal;

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newQuantity = parseInt(e.target.value, 10);
        onQuantityChange(id, newQuantity);
    };

    return (
        <div className="card bg-base-100 shadow-md">
            <div className="flex items-start p-4 gap-4">
                {/* Image on the left */}
                <img
                    src={image}
                    alt={title}
                    className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Content on the middle */}
                <div className="flex-1">
                    <h2 className="text-lg font-bold mb-1">{title}</h2>
                    <p className="text-sm text-base-content/70">{description}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {tags.map((tag) => (
                            <CircularTag name={tag} />
                        ))}
                    </div>
                </div>

                <div>
                    <select
                        className="select select-bordered w-20"
                        value={quantity}
                        onChange={handleSelectChange}
                    >
                        {Array.from({ length: 21 }, (_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MealOptionCard;
