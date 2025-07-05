import MealOptionCard from "~/components/MealOptionCard";
import type {Meal} from "~/types/Meal";
import {useState} from "react";

export function Welcome() {
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (mealId: string, quantity: number) => {
    setSelectedQuantities((prev) => {
        const updated = { ...prev };
        if (quantity === 0) {
            delete updated[mealId];
        } else {
            updated[mealId] = quantity;
        }
        return updated;
    });
  };

  const handleSubmit = () => {
    const selectedMeals = mealsData
        .filter((meal) => selectedQuantities[meal.id])
        .map((meal) => ({
            ...meal,
            quantity: selectedQuantities[meal.id]
        }));

    console.log("Final selection:", selectedMeals);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-2">
          {mealsData.map((meal) => (
              <MealOptionCard
                  meal={meal}
                  quantity={selectedQuantities[meal.id] || 0}
                  onQuantityChange={handleQuantityChange}
              />
          ))}
      </div>

      <button className="btn btn-primary mt-4" onClick={handleSubmit}>
        Review Order
      </button>
    </main>
  );
}

const mealsData: Meal[] = [
    {
        id: "1",
        title: "Chicken Teriyaki",
        description: "Served with steamed rice and veggies.",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-05-chicken-teriyaki-190%2Fchicken-teriyaki-190-171-horizontal",
        tags: ["Gluten-Free", "Protein-Packed"],
        price: 13
    },
    {
        id: "2",
        title: "Vegan Curry",
        description: "A hearty curry with chickpeas and sweet potato.",
        image: "https://www.noracooks.com/wp-content/uploads/2022/08/vegan-curry-6.jpg",
        tags: ["Vegan", "Gluten-Free"],
        price: 15
    }
];
