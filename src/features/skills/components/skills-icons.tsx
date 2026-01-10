import React from "react";
import {
  FaBrain,
  FaCode,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaProjectDiagram,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
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
  SiOpencv,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

// Icon color mapping for brand colors
export const iconColors: Record<string, string> = {
  SiJavascript: "#F7DF1E",
  SiTypescript: "#3178C6",
  SiPython: "#3776AB",
  FaJava: "#007396",
  FaHtml5: "#E34F26",
  FaCss3Alt: "#1572B6",
  SiReact: "#61DAFB",
  SiNextdotjs: "#000000",
  SiTailwindcss: "#06B6D4",
  SiBootstrap: "#7952B3",
  SiSass: "#CC6699",
  SiNodedotjs: "#339933",
  SiExpress: "#000000",
  SiFastapi: "#009688",
  TbApi: "#FF6B6B",
  SiJsonwebtokens: "#000000",
  SiMongodb: "#47A248",
  SiPostgresql: "#4169E1",
  SiMysql: "#4479A1",
  SiPrisma: "#2D3748",
  FaDocker: "#2496ED",
  FaGitAlt: "#F05032",
  SiGithubactions: "#2088FF",
  SiGooglecloud: "#4285F4",
  SiFirebase: "#FFCA28",
  SiWebpack: "#8DD6F9",
  FaBrain: "#FF6B6B",
  GiArtificialIntelligence: "#8B5CF6",
  SiOpencv: "#5C3EE8",
  SiOpenai: "#412991",
  FaProjectDiagram: "#06B6D4",
  FaCode: "#10B981",
  SiRedis: "#DC382D",
  FaShieldAlt: "#3498DB",
  FaStream: "#9B59B6",
  FaVial: "#1ABC9C",
  FaChartLine: "#2ECC71",
  FaTasks: "#E67E22",
};

const iconComponents: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  SiJavascript,
  SiTypescript,
  SiPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  TbApi,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  FaDocker,
  FaGitAlt,
  SiGithubactions,
  SiGooglecloud,
  SiFirebase,
  SiWebpack,
  FaBrain,
  GiArtificialIntelligence,
  SiOpencv,
  SiOpenai,
  FaProjectDiagram,
  FaCode,
};

export const getSkillIcon = (
  iconName: string,
  className: string = "h-4 w-4",
): React.ReactNode => {
  const IconComponent = iconComponents[iconName];
  if (!IconComponent) return null;

  const color = iconColors[iconName] || "#6B7280";

  return <IconComponent className={className} style={{ color }} />;
};

export const getSkillIconMap = (): Record<string, React.ReactNode> => {
  const iconMap: Record<string, React.ReactNode> = {};
  Object.keys(iconComponents).forEach((iconName) => {
    iconMap[iconName] = getSkillIcon(iconName);
  });
  return iconMap;
};
