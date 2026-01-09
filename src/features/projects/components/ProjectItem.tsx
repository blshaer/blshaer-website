import { AnimatePresence, motion } from "framer-motion";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectTechnologies } from "./ProjectTechnologies";

export function ProjectItem({
  project,
  isOpen,
  onToggle,
}: {
  project: any;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl shadow-sm transition hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-center justify-between"
      >
        <h3 className="text-lg font-semibold text-[var(--headline)]">
          {project.title}
        </h3>

        <span
          className={`text-sm transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 space-y-4 text-[var(--paragraph)]">
              <ProjectDescription description={project.description} />

              <ul className="space-y-2">
                <ProjectLinks
                  website={project.website}
                  github={project.github}
                  videoUrl={project.videoUrl}
                />
              </ul>

              <ProjectTechnologies technologies={project.technologies} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
