import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import MealOptionCard from "../components/MealOptionCard";
import type {Meal} from "../types/Meal";
import type {OrderItem} from "../types/OrderItem";
import type {ReviewOrderItem} from "../types/ReviewOrderItem";
import mealService from "../services/mealServiceFactory";

export function MealsHome() {
  const [orderItems, setOrderItems] = useState<Record<string, OrderItem>>({});
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [redirect, setRedirect] = useState<{ to: string; state: any } | null>(null);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const data = await mealService.fetchMeals();
        setMeals(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getMeals();
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
    setRedirect({ to: "/review-order", state: { reviewOrderItems: selected } });
  };

  if (redirect) {
    return <Navigate to={redirect.to} state={redirect.state} />;
  }

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="alert alert-error">
          <span>Error loading meals: {error}</span>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-2">
        {meals.map((meal) => (
          <MealOptionCard
            key={meal.id}
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

export default MealsHome;
