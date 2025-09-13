import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import HomePage from "../src/pages/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gold Consultoria" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
