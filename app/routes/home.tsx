import type { Route } from "./+types/home";
import { MealsHome } from "~/pages/meals-home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Off the Fork" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <MealsHome />;
}
