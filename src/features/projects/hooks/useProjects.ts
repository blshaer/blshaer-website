import { useMemo, useState } from "react";
import { PROJECTS_DATA } from "../data/projects.data";
import { Project } from "../types/project.types";

export function useProjects(filterType: string) {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const projects = useMemo<Project[]>(() => {
    if (filterType === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter(
      (p) => p.type.toLowerCase().replace(/\s+/g, "") === filterType,
    );
  }, [filterType]);

  const toggleProject = (id: string) => {
    setOpenProjectId((prev) => (prev === id ? null : id));
  };

  return {
    projects,
    openProjectId,
    toggleProject,
  };
}
