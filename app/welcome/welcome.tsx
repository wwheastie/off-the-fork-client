import MealOptionCard from "~/components/MealOptionCard";

export function Welcome() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div>
          <MealOptionCard
              image={"https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"}
              title={"Meal 1"}
              description={"Rice dish with a mouthful of flavor"}
              />
      </div>
    </main>
  );
}
