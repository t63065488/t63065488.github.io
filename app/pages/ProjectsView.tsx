import ProjectCard from "~/components/project-card/ProjectCard";

const ProjectsView = (): React.ReactNode => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="h1 mb-8">Projects</h1>
      <div className="grid grid-cols-2 gap-4">
        <ProjectCard
          body="Void Codex!"
          title="Void Codex"
          subtitle="A VTT application."
          href="https://github.com/t63065488/void-codex"
          imgSrc="/void-codex-header.png"
        />
        <ProjectCard
          body="Something something data sorting."
          title="Ubiquitous Lamp"
          subtitle="Client-side data handling, sorting and sampling."
          href="https://github.com/t63065488/ubiquitous-lamp"
          imgSrc="/ubiquitous-lamp-header.png"
        />
      </div>
    </div>
  );
};

export default ProjectsView;
