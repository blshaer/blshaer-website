"use client";

import { SkillsList } from "@/shared/ui/skills";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineBranches, AiOutlinePlayCircle } from "react-icons/ai";

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  website: string;
  github?: string;
  technologies: string[];
  status: string;
  featured: boolean;
  created: string;
  updated: string;
  videoUrl?: string;
  logoFileName: string; // New field for local logo file
}


const projectsData: Project[] = [
  {
    id: "proj_1",
    title: "sam-tax.com",
    description: `• Trusted tax and accounting platform for expert tax preparation, financial planning, and business advisory services.\n\n• Secure, scalable web app with multi-language support.\n\n• Integrated payment systems and AI-powered automation for efficiency.`,
    type: "Web Application",
    website: "https://sam-tax.com/",
    technologies: [
      "React ",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT & OAuth",
      "CI/CD (GitHub Actions)",
      "AI Automation",
      "Payment Integration",
      "Cloud Deployment",
    ],
    status: "Published",
    featured: true,
    created: "2024-06-01",
    updated: "2025-01-10",
    logoFileName: "samtax.svg",
  },
  {
    id: "proj_3",
    title: "SFB - Sustainable Form Builder",
    description: `• No-code form builder for creating smart forms in minutes.\n\n• Drag-and-drop, advanced logic, and seamless integrations.\n\n• Designed for teams needing flexible data collection without technical headaches.`,
    type: "SaaS Platform",
    website: "https://sfb-app.com",
    technologies: [
      "React",
      "TypeScript",
      "React DnD",
      "Node.js",
      "RESTful APIs",
      "Tailwind CSS",
      "JWT & OAuth",
      "SaaS Multi-Tenant Architecture",
      "Cloud Hosting",
      "Automated Testing",
    ],
    status: "Published",
    featured: true,
    created: "2023-06-01",
    updated: "2023-11-30",
    videoUrl: "https://www.youtube.com/watch?v=2IqjzGT1l1c",
    logoFileName: "sfb.svg",
  },
  {
    id: "proj_4",
    title: "Gradients CSS",
    description: `• Tool for creating, exploring, and exporting CSS gradients.\n\n• Real-time preview and export options for quick workflow.\n\n• Helps developers and designers customize gradients easily.`,
    type: "Tool",
    website: "https://gradientscss.vercel.app/",
    github: "https://github.com/blshaer/gradientscss",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "CSS3",
      "UI/UX Design",
      "Export Utilities",
    ],
    status: "Published",
    featured: true,
    created: "2024-11-01",
    updated: "",
    logoFileName: "gradientscss.png",
  },
  {
    id: "proj_5",
    title: "Barber Academy",
    description: `• Website for Barber Academy with online appointment scheduling.\n\n• Showcases a complete range of services and streamlines operations.\n\n• User-friendly platform increased client engagement.`,
    type: "Website",
    website: "https://raoufzadi.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "RESTful APIs",
      "Booking System",
      "Responsive Design",
    ],
    status: "Published",
    featured: true,
    created: "2023-07-01",
    updated: "2023-08-01",
    logoFileName: "barber.svg",
  },
  {
    id: "proj_6",
    title: "TalentSift - AI Resume Analyzer",
    description: `• AI-powered resume analysis platform for instant candidate insights.\n\n• Gemini AI integration provides scoring, recommendations, and actionable hiring suggestions.\n\n• LinkedIn & GitHub integration for enhanced profile insights.\n\n• Resume export in multiple formats with detailed feedback for recruiters.\n\n• Streamlined recruitment workflows with AI automation and analytics.`,
    type: "AI Platform",
    website: "http://talentsift.vercel.app/",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gemini AI API",
      "AI Integration",
      "Resume Processing",
      "Machine Learning",
      "LinkedIn & GitHub Analysis",
      "PDF/DocX Export",
    ],
    status: "Published",
    featured: true,
    created: "2024-12-01",
    updated: "2025-01-13",
    logoFileName: "talentsift.svg",
  },
];


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
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
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
        {/* ==== BEGIN: Proud Projects Intro ==== */}
        <p
          className="mt-2 mb-6 text-base font-mono"
          style={{ color: "var(--card-paragraph)" }}
        >
          These are some of my projects I’m proud of.
        </p>
        {/* ==== END: Proud Projects Intro ==== */}
      </div>

      {projectsData.map((project) => (
        <div
          key={project.id}
          className="border-b"
          style={{ borderColor: "var(--card-border-color)" }}
          data-state={openProjectId === project.id ? "open" : "closed"}
        >
          <div className="flex items-center ">
            <div
              className="flex-1 border-l border-dashed"
              style={{ borderColor: "var(--card-border-color)" }}
            >
              <button
                type="button"
                aria-controls={`radix-${project.id}`}
                aria-expanded={openProjectId === project.id}
                data-state={openProjectId === project.id ? "open" : "closed"}
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
                  data-state="closed"
                  data-slot="tooltip-trigger"
                  style={{ color: "var(--link-color)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-link pointer-events-none size-4"
                    aria-hidden="true"
                    style={{ stroke: "var(--link-color)" }}
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span className="sr-only">Open Project Link</span>
                </a>
                <div
                  className="shrink-0"
                  aria-hidden="true"
                  style={{ color: "var(--paragraph)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide ${openProjectId === project.id
                      ? "lucide-chevrons-down-up"
                      : "lucide-chevrons-up-down"
                      } size-4`}
                    aria-hidden="true"
                    style={{ stroke: "var(--paragraph)" }}
                  >
                    {openProjectId === project.id ? (
                      <>
                        <path d="m7 20 5-5 5 5"></path>
                        <path d="m7 4 5 5 5-5"></path>
                      </>
                    ) : (
                      <>
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                      </>
                    )}
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {openProjectId === project.id && (
              <motion.div
                key={`content-${project.id}`}
                id={`radix-${project.id}`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={contentVariants}
                style={{
                  overflow: "hidden",
                  borderTopStyle: "dashed",
                  borderTopWidth: 1,
                  borderColor: "var(--card-border-color)",
                }}
              >
                <div
                  data-slot="prose"
                  className="prose prose-sm max-w-none font-mono prose-headings:font-semibold prose-headings:text-2xl prose-lead:text-base prose-a:font-medium prose-a:underline prose-code:rounded-md prose-code:border prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge p-4"
                  style={{ color: "var(--card-paragraph)" }}
                >
                  <ProjectDescription description={project.description} />
                  <ul className="mb-2 space-y-2 ">
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

      {/* ==== BEGIN: Explore More on GitHub ==== */}
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
      {/* ==== END: Explore More on GitHub ==== */}
    </section>
  );
};

export default Projects;
