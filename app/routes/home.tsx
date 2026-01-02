import Welcome from "~/pages/Welcome";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Tom's Portfolio" }];
}

const Home = (): React.ReactNode => {
  return <Welcome />;
};

export default Home;
