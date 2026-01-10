"use client";

import { useMemo, useState } from "react";
import { ProjectItem } from "./ProjectItem";

type ProjectsSectionProps = {
  filterType: string;
};

export interface Project {
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
  logoFileName: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj_1",
    title: "Samtax",
    description: `• Trusted tax and accounting platform for expert tax preparation, financial planning, and business advisory services.

• Secure, scalable web app with multi-language support.

• Integrated payment systems and AI-powered automation for efficiency.`,
    type: "Web Application",
    website: "https://sam-tax.com/",
    technologies: [
      "React",
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
    title: "SFB – Sustainable Form Builder",
    description: `• No-code form builder for creating smart forms in minutes.

• Drag-and-drop builder with advanced logic.

• Seamless integrations and scalable SaaS architecture.`,
    type: "SaaS Platform",
    website: "https://sfb-app.com",
    technologies: [
      "React",
      "TypeScript",
      "React DnD",
      "Node.js",
      "REST APIs",
      "Tailwind CSS",
      "JWT & OAuth",
      "Multi-Tenant SaaS",
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
    title: "GradlyAI",
    description: `GradlyAI is a free AI-powered tool for generating modern CSS gradients.

• AI-based gradient generation
• Real-time visual preview
• Export-ready CSS code
• Built for developers and designers`,
    type: "Tool",
    website: "https://gradlyai.free.nf/",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "CSS3",
      "AI Integration",
      "UI/UX Design",
    ],
    status: "Published",
    featured: true,
    created: "2024-11-01",
    updated: "2024-11-01",
    logoFileName: "gradientscss.png",
  },
  {
    id: "proj_5",
    title: "Barber Academy",
    description: `• Website for a barber academy with online booking.

• Service showcase and appointment management.

• Improved client engagement through modern UI.`,
    type: "Website",
    website: "https://raoufzadi.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Booking System",
      "Responsive Design",
    ],
    status: "Published",
    featured: true,
    created: "2023-07-01",
    updated: "2023-08-01",
    logoFileName: "barber.svg",
  },
];

export default function ProjectsSection({ filterType }: ProjectsSectionProps) {
  // Tracks which project accordion is open (or null if none).
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  // Toggle open/close for a given project.
  const toggleProject = (projectId: string) => {
    setOpenProjectId((current) => (current === projectId ? null : projectId));
  };

  // Filter projects by type, unless filterType is "All" or empty.
  const projects = useMemo(() => {
    const ft = filterType?.trim();
    if (!ft || ft.toLowerCase() === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.type === ft);
  }, [filterType]);

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
