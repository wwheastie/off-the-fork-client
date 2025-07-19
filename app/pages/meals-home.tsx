import MealOptionCard from "~/components/MealOptionCard";
import type {Meal} from "~/types/Meal";
import {useEffect, useState} from "react";
import type {OrderItem} from "~/types/OrderItem";
import {useNavigate} from "react-router";
import type {ReviewOrderItem} from "~/types/ReviewOrderItem";
import { getApiUrl } from "~/config/env";

export function MealsHome() {
  const [orderItems, setOrderItems] = useState<Record<string, OrderItem>>({});

  const navigate = useNavigate();

    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch(getApiUrl("/api/v1/current/meals"));

                console.log(response)

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setMeals(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, []);

    const hasSelectedMeals = Object.values(orderItems).some(
        (item) => item.quantity > 0
    );

    const onChange = (mealId: string, orderItem: OrderItem) => {
    setOrderItems((prev) => {
        const updated = { ...prev };
        if (orderItem.quantity === 0 && orderItem.notes.trim() === "") {
            delete updated[mealId];
        } else {
            updated[mealId] = orderItem;
        }
        return updated;
    });
  };

    const handleSubmit = () => {
        const selected: (null | ReviewOrderItem)[] = Object.values(orderItems)
            .filter(orderItem => orderItem.quantity > 0)
            .map(orderItem => {
                const meal = meals.find(m => m.id === orderItem.mealId);
                if (!meal) return null; // skip if meal not found

                return {
                    id: meal.id,
                    title: meal.name,
                    description: meal.description,
                    image: meal.imageUrl,
                    quantity: orderItem.quantity,
                    notes: orderItem.notes?.trim() || "",
                    price: meal.price,
                    totalPrice: meal.price * orderItem.quantity,
                };
            })
            .filter(Boolean);
        console.log("Final order:", selected);
        navigate("review-order", { state: { reviewOrderItems: selected } })
    };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-2">
          {meals.map((meal) => (
              <MealOptionCard
                  meal={meal}
                  quantity={orderItems[meal.id]?.quantity || 0}
                  onChange={onChange}
              />
          ))}
      </div>

        <button
            className="btn btn-primary mt-4"
            onClick={handleSubmit}
            disabled={!hasSelectedMeals}
        >
            Review Order
        </button>
    </main>
  );
}
