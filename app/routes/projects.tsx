import ProjectsView from "~/pages/ProjectsView";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Projects - Tom\'s Portfolio" }];
}

const Projects = (): React.ReactNode => {
  return <ProjectsView />;
};

export default Projects;
