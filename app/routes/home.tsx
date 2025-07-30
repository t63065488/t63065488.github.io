import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Portfolio from "~/components/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Portfolio Site" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
