import { ReactNode } from "react";
import {
  FaBrain,
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaProjectDiagram,
  FaShieldAlt,
  FaStream,
  FaTasks,
  FaVial,
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
import { iconColors } from "./skills-icons";

export type SkillData = {
  name: string;
  icon: ReactNode;
  category: string;
};

export const ALL_SKILLS: SkillData[] = [
  {
    name: "JavaScript",
    icon: <SiJavascript title="JavaScript" color={iconColors.SiJavascript} />,
    category: "Programming Languages",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript title="TypeScript" color={iconColors.SiTypescript} />,
    category: "Programming Languages",
  },
  {
    name: "Python",
    icon: <SiPython title="Python" color={iconColors.SiPython} />,
    category: "Programming Languages",
  },
    {
    name: "Java",
    icon: <FaJava title="Python" color={iconColors.SiJava} />,
    category: "Programming Languages",
  },

  {
    name: "React.js",
    icon: <SiReact title="React.js" color={iconColors.SiReact} />,
    category: "Frontend Development",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs title="Next.js" color={iconColors.SiNextdotjs} />,
    category: "Frontend Development",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 title="HTML5" color={iconColors.FaHtml5} />,
    category: "Frontend Development",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt title="CSS3" color={iconColors.FaCss3Alt} />,
    category: "Frontend Development",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss title="Tailwind CSS" color={iconColors.SiTailwindcss} />,
    category: "Frontend Development",
  },
  {
    name: "SASS",
    icon: <SiSass title="SASS" color={iconColors.SiSass} />,
    category: "Frontend Development",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap title="Bootstrap" color={iconColors.SiBootstrap} />,
    category: "Frontend Development",
  },

  {
    name: "Node.js",
    icon: <SiNodedotjs title="Node.js" color={iconColors.SiNodedotjs} />,
    category: "Backend & APIs",
  },
  {
    name: "Express.js",
    icon: <SiExpress title="Express.js" color={iconColors.SiExpress} />,
    category: "Backend & APIs",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi title="FastAPI" color={iconColors.SiFastapi} />,
    category: "Backend & APIs",
  },
  {
    name: "RESTful APIs",
    icon: <TbApi title="RESTful APIs" color={iconColors.TbApi} />,
    category: "Backend & APIs",
  },
  {
    name: "JWT & OAuth",
    icon: <SiJsonwebtokens title="JWT & OAuth" color={iconColors.SiJsonwebtokens} />,
    category: "Backend & APIs",
  },
  {
    name: "API Security & Validation",
    icon: <FaShieldAlt title="API Security" color={iconColors.FaShieldAlt} />,
    category: "Backend & APIs",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb title="MongoDB" color={iconColors.SiMongodb} />,
    category: "Databases & Caching",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql title="PostgreSQL" color={iconColors.SiPostgresql} />,
    category: "Databases & Caching",
  },
  {
    name: "MySQL",
    icon: <SiMysql title="MySQL" color={iconColors.SiMysql} />,
    category: "Databases & Caching",
  },
  {
    name: "Prisma",
    icon: <SiPrisma title="Prisma" color={iconColors.SiPrisma} />,
    category: "Databases & Caching",
  },
  {
    name: "Redis",
    icon: <SiRedis title="Redis" color={iconColors.SiRedis} />,
    category: "Databases & Caching",
  },

  { name: "Git", icon: <FaGitAlt title="Git" color={iconColors.FaGitAlt} />, category: "DevOps & Cloud" },
  {
    name: "Docker",
    icon: <FaDocker title="Docker" color={iconColors.FaDocker} />,
    category: "DevOps & Cloud",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions title="GitHub Actions" color={iconColors.SiGithubactions} />,
    category: "DevOps & Cloud",
  },
  {
    name: "Google Cloud Platform",
    icon: <SiGooglecloud title="Google Cloud Platform" color={iconColors.SiGooglecloud} />,
    category: "DevOps & Cloud",
  },
  {
    name: "Firebase",
    icon: <SiFirebase title="Firebase" color={iconColors.SiFirebase} />,
    category: "DevOps & Cloud",
  },
  {
    name: "Webpack",
    icon: <SiWebpack title="Webpack" color={iconColors.SiWebpack} />,
    category: "DevOps & Cloud",
  },

  {
    name: "OpenAI API",
    icon: <SiOpenai title="OpenAI API" color={iconColors.SiOpenai} />,
    category: "AI Integration",
  },
  {
    name: "Prompt Engineering",
    icon: <FaBrain title="Prompt Engineering" color={iconColors.FaBrain} />,
    category: "AI Integration",
  },
  {
    name: "AI Streaming Responses",
    icon: <FaStream title="AI Streaming" color={iconColors.FaStream} />,
    category: "AI Integration",
  },
  {
    name: "Token & Cost Optimization",
    icon: <FaChartLine title="Cost Optimization" color={iconColors.FaChartLine} />,
    category: "AI Integration",
  },
  {
    name: "AI Workflows & Automation",
    icon: <FaTasks title="AI Automation" color={iconColors.FaTasks} />,
    category: "AI Integration",
  },

  {
    name: "System Design",
    icon: <FaProjectDiagram title="System Design" color={iconColors.FaProjectDiagram} />,
    category: "Software Engineering Concepts",
  },
  {
    name: "OOP",
    icon: <FaCode title="OOP" color={iconColors.FaCode} />,
    category: "Software Engineering Concepts",
  },
  {
    name: "Backend & API Testing",
    icon: <FaVial title="Testing" color={iconColors.FaVial} />,
    category: "Software Engineering Concepts",
  },
];

export const skillIconMap: Record<string, ReactNode> = Object.fromEntries(
  ALL_SKILLS.map((s) => [s.name, s.icon]),
);
