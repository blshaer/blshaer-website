export interface Skill {
  name: string;
  iconName: string;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
  order: number;
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    order: 1,
    skills: [
      { name: "JavaScript", iconName: "SiJavascript", proficiency: "expert" },
      { name: "TypeScript", iconName: "SiTypescript", proficiency: "expert" },
      { name: "Python", iconName: "SiPython", proficiency: "advanced" },
      { name: "Java", iconName: "SiJava", proficiency: "advanced" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    order: 2,
    skills: [
      { name: "React.js", iconName: "SiReact", proficiency: "expert" },
      { name: "Next.js", iconName: "SiNextdotjs", proficiency: "expert" },
      { name: "HTML5", iconName: "FaHtml5", proficiency: "expert" },
      { name: "CSS3", iconName: "FaCss3Alt", proficiency: "expert" },
      {
        name: "Tailwind CSS",
        iconName: "SiTailwindcss",
        proficiency: "expert",
      },
      { name: "SASS", iconName: "SiSass", proficiency: "advanced" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    order: 3,
    skills: [
      { name: "Node.js", iconName: "SiNodedotjs", proficiency: "expert" },
      { name: "Express.js", iconName: "SiExpress", proficiency: "expert" },
      { name: "FastAPI", iconName: "SiFastapi", proficiency: "intermediate" },
      { name: "RESTful APIs", iconName: "TbApi", proficiency: "expert" },
      {
        name: "JWT & OAuth",
        iconName: "SiJsonwebtokens",
        proficiency: "advanced",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & ORM",
    order: 4,
    skills: [
      { name: "MongoDB", iconName: "SiMongodb", proficiency: "expert" },
      { name: "PostgreSQL", iconName: "SiPostgresql", proficiency: "advanced" },
      { name: "MySQL", iconName: "SiMysql", proficiency: "advanced" },
      { name: "Prisma", iconName: "SiPrisma", proficiency: "advanced" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    order: 5,
    skills: [
      { name: "Git", iconName: "FaGitAlt", proficiency: "expert" },
      { name: "Docker", iconName: "FaDocker", proficiency: "intermediate" },
      {
        name: "GitHub Actions",
        iconName: "SiGithubactions",
        proficiency: "intermediate",
      },
      {
        name: "Google Cloud Platform",
        iconName: "SiGooglecloud",
        proficiency: "intermediate",
      },
      { name: "Firebase", iconName: "SiFirebase", proficiency: "advanced" },
    ],
  },
  {
    id: "ai",
    title: "AI Integration",
    order: 6,
    skills: [
      { name: "OpenAI API", iconName: "SiOpenai", proficiency: "advanced" },
      {
        name: "Prompt Engineering",
        iconName: "FaBrain",
        proficiency: "advanced",
      },
      {
        name: "AI API Integration",
        iconName: "TbApi",
        proficiency: "advanced",
      },
      {
        name: "AI Workflows & Automation",
        iconName: "GiArtificialIntelligence",
        proficiency: "intermediate",
      },
      {
        name: "Data Processing for AI",
        iconName: "FaDatabase",
        proficiency: "intermediate",
      },
      {
        name: "Rate Limiting & Cost Optimization",
        iconName: "FaChartLine",
        proficiency: "intermediate",
      },
    ],
  },
  {
    id: "concepts",
    title: "Software Engineering Concepts",
    order: 7,
    skills: [
      {
        name: "System Design",
        iconName: "FaProjectDiagram",
        proficiency: "advanced",
      },
      { name: "OOP", iconName: "FaCode", proficiency: "expert" },
    ],
  },
];

// Helper to create icon map for work experience
export const createSkillIconMap = (): Record<string, string> => {
  const map: Record<string, string> = {};
  SKILLS_DATA.forEach((category) => {
    category.skills.forEach((skill) => {
      map[skill.name] = skill.iconName;
    });
  });
  return map;
};

export const getAllSkillNames = (): string[] => {
  return SKILLS_DATA.flatMap((category) =>
    category.skills.map((skill) => skill.name),
  );
};
