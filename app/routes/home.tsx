import type { Route } from "./+types/home";
import { MealsHome } from "~/pages/meals-home";
import { config } from "~/config/env";

export function meta({}: Route.MetaArgs) {
  return [
    { title: config.app.title },
    { name: "description", content: config.app.description },
  ];
}

export default function Home() {
  return <MealsHome />;
}
