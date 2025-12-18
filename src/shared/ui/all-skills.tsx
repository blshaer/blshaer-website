import { ReactNode } from "react";
import {
  FaBrain,
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaProjectDiagram,
  FaShieldAlt,
  FaStream,
  FaTasks,
  FaVial
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiGooglecloud,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export type SkillData = {
  name: string;
  icon: ReactNode;
  category: string;
};

export const ALL_SKILLS: SkillData[] = [
  { name: "JavaScript", icon: <SiJavascript title="JavaScript" />, category: "Programming Languages" },
  { name: "TypeScript", icon: <SiTypescript title="TypeScript" />, category: "Programming Languages" },
  { name: "Python", icon: <SiPython title="Python" />, category: "Programming Languages" },

  { name: "React.js", icon: <SiReact title="React.js" />, category: "Frontend Development" },
  { name: "Next.js", icon: <SiNextdotjs title="Next.js" />, category: "Frontend Development" },
  { name: "HTML5", icon: <FaHtml5 title="HTML5" />, category: "Frontend Development" },
  { name: "CSS3", icon: <FaCss3Alt title="CSS3" />, category: "Frontend Development" },
  { name: "Tailwind CSS", icon: <SiTailwindcss title="Tailwind CSS" />, category: "Frontend Development" },
  { name: "SASS", icon: <SiSass title="SASS" />, category: "Frontend Development" },
  { name: "Bootstrap", icon: <SiBootstrap title="Bootstrap" />, category: "Frontend Development" },

  { name: "Node.js", icon: <SiNodedotjs title="Node.js" />, category: "Backend & APIs" },
  { name: "Express.js", icon: <SiExpress title="Express.js" />, category: "Backend & APIs" },
  { name: "FastAPI", icon: <SiFastapi title="FastAPI" />, category: "Backend & APIs" },
  { name: "RESTful APIs", icon: <TbApi title="RESTful APIs" />, category: "Backend & APIs" },
  { name: "JWT & OAuth", icon: <SiJsonwebtokens title="JWT & OAuth" />, category: "Backend & APIs" },
  { name: "API Security & Validation", icon: <FaShieldAlt title="API Security" />, category: "Backend & APIs" },

  { name: "MongoDB", icon: <SiMongodb title="MongoDB" />, category: "Databases & Caching" },
  { name: "PostgreSQL", icon: <SiPostgresql title="PostgreSQL" />, category: "Databases & Caching" },
  { name: "MySQL", icon: <SiMysql title="MySQL" />, category: "Databases & Caching" },
  { name: "Prisma", icon: <SiPrisma title="Prisma" />, category: "Databases & Caching" },
  { name: "Redis", icon: <SiRedis title="Redis" />, category: "Databases & Caching" },

  { name: "Git", icon: <FaGitAlt title="Git" />, category: "DevOps & Cloud" },
  { name: "Docker", icon: <FaDocker title="Docker" />, category: "DevOps & Cloud" },
  { name: "GitHub Actions", icon: <SiGithubactions title="GitHub Actions" />, category: "DevOps & Cloud" },
  { name: "Google Cloud Platform", icon: <SiGooglecloud title="Google Cloud Platform" />, category: "DevOps & Cloud" },
  { name: "Firebase", icon: <SiFirebase title="Firebase" />, category: "DevOps & Cloud" },
  { name: "Webpack", icon: <SiWebpack title="Webpack" />, category: "DevOps & Cloud" },

  { name: "OpenAI API", icon: <SiOpenai title="OpenAI API" />, category: "AI Integration" },
  { name: "Prompt Engineering", icon: <FaBrain title="Prompt Engineering" />, category: "AI Integration" },
  { name: "AI Streaming Responses", icon: <FaStream title="AI Streaming" />, category: "AI Integration" },
  { name: "Token & Cost Optimization", icon: <FaChartLine title="Cost Optimization" />, category: "AI Integration" },
  { name: "AI Workflows & Automation", icon: <FaTasks title="AI Automation" />, category: "AI Integration" },

  { name: "System Design", icon: <FaProjectDiagram title="System Design" />, category: "Software Engineering Concepts" },
  { name: "OOP", icon: <FaCode title="OOP" />, category: "Software Engineering Concepts" },
  { name: "Backend & API Testing", icon: <FaVial title="Testing" />, category: "Software Engineering Concepts" },
];

export const skillIconMap: Record<string, ReactNode> = Object.fromEntries(
  ALL_SKILLS.map((s) => [s.name, s.icon]),
);
