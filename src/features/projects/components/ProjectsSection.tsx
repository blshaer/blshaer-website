"use client";

import { useProjects } from "../hooks/useProjects";
import { ProjectItem } from "./ProjectItem";

type ProjectsSectionProps = {
  filterType: string;
};

export default function ProjectsSection({
  filterType,
}: ProjectsSectionProps) {
  const { projects, openProjectId, toggleProject } =
    useProjects(filterType);

  return (
    <section id="projects" className="container mx-auto">
            <h2 className="section-title">Projects</h2>
           <p
          className="font-figtree text-sm mt-2 mb-4"
          style={{ color: "var(--paragraph)" }}
          data-ninja-font="figtree_light_normal_rmlnd"
        >
Here are some projects I’m proud to have worked on.
        </p>
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            isOpen={openProjectId === project.id}
            onToggle={() => toggleProject(project.id)}
          />
        ))}
      </div>
    </section>
  );
}
