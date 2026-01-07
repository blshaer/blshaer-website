"use client";

import { SkillsList } from "@/shared/ui/skills";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineBranches, AiOutlinePlayCircle } from "react-icons/ai";
import { Project, projectsData } from "../utils/projects";

function ProjectDescription({ description }: { description: string }) {
  return (
    <ul className="mb-4 list-disc ml-6 space-y-2">
      {description.split("\n\n").map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-base leading-5">-</span>
          <span>{item.replace(/^•\s*/, "")}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ github }: { github?: string }) {
  if (!github) return null;
  return (
    <li className="flex items-center gap-2">
      <AiOutlineBranches className="text-[var(--headline)]" />
      <strong style={{ color: "var(--headline)" }}>GitHub:</strong>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        style={{ color: "var(--link-color)" }}
      >
        {github}
      </a>
    </li>
  );
}

function ProjectTechnologies({ technologies }: { technologies: string[] }) {
  return (
    <li className="flex items-center gap-2 mb-4 list-disc ml-6 space-y-2">
      <SkillsList skills={technologies} />
    </li>
  );
}

function ProjectVideo({ videoUrl }: { videoUrl?: string }) {
  if (!videoUrl) return null;
  return (
    <li className="flex items-center gap-2">
      <AiOutlinePlayCircle className="text-[var(--headline)]" />
      <strong style={{ color: "var(--headline)" }}>Video:</strong>
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        style={{ color: "var(--link-color)" }}
      >
        Watch Video
      </a>
    </li>
  );
}

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  const contentVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  return (
    <section data-slot="panel" id="projects">
      <div data-slot="panel-header" className="screen-line-after px-4">
        <h2
          data-slot="panel-title"
          className="section-title"
          style={{ color: "var(--headline)" }}
        >
          Projects
        </h2>
        <p
          className="mt-2 mb-6 text-base font-mono"
          style={{ color: "var(--card-paragraph)" }}
        >
          These are some of my projects I’m proud of.
        </p>
      </div>

      {projectsData.map((project: Project) => (
        <div
          key={project.id}
          className="border-b"
          style={{ borderColor: "var(--card-border-color)" }}
          data-state={openProjectId === project.id ? "open" : "closed"}
        >
          <div className="flex items-center">
            <div
              className="flex-1 border-l border-dashed"
              style={{ borderColor: "var(--card-border-color)" }}
            >
              <button
                type="button"
                aria-expanded={openProjectId === project.id}
                className="group/project flex w-full items-center gap-4 p-4 pr-2 text-left select-none"
                onClick={() => toggleProject(project.id)}
                style={{ color: "var(--main)" }}
              >
                <div className="flex-1">
                  <h3
                    className="mb-1 leading-snug font-medium"
                    style={{ color: "var(--card-headline)" }}
                  >
                    {project.title}
                  </h3>
                </div>
                <a
                  className="flex size-6 shrink-0 items-center justify-center"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--link-color)" }}
                >
                  <span className="sr-only">Open Project Link</span>
                </a>
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {openProjectId === project.id && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={contentVariants as any}
                style={{
                  overflow: "hidden",
                  borderTopStyle: "dashed",
                  borderTopWidth: 1,
                  borderColor: "var(--card-border-color)"
                }}
              >
                <div
                  className="prose prose-sm max-w-none font-mono p-4"
                  style={{ color: "var(--card-paragraph)" }}
                >
                  <ProjectDescription description={project.description} />
                  <ul className="mb-2 space-y-2">
                    <ProjectVideo videoUrl={project.videoUrl} />
                    <ProjectLinks github={project.github} />
                    <ProjectTechnologies technologies={project.technologies} />
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      <div className="px-4 py-6 flex justify-center">
        <a
          href="https://github.com/blshaer"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lg underline"
          style={{ color: "var(--link-color)" }}
        >
          Explore more on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
