import ExperienceView from "~/pages/ExperienceView";
import type { Route } from "./+types/experience";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Experience - Tom's Portfolio" }];
}

const Experience = (): React.ReactNode => {
  return <ExperienceView />;
};

export default Experience;
