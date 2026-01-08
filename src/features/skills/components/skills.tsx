import { cn } from "@/shared/lib/utils";
import React from "react";

export type SkillBadgeProps = {
  skill: string;
  className?: string;
  icon?: React.ReactNode;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
  showProficiency?: boolean;
};

export function SkillBadge({
  skill,
  className,
  icon,
  proficiency,
  showProficiency = false,
}: SkillBadgeProps) {
  return (
    <span
      className={cn("skill-badge", className)}
      style={{
        color: "var(--foreground)",
      }}
    >
      {icon && (
        <span className="inline-flex items-center flex-shrink-0">{icon}</span>
      )}
      <span className="font-medium">{skill}</span>
    </span>
  );
}

export type SkillsListProps = {
  skills: string[];
  iconMap?: Record<string, React.ReactNode>;
  proficiencyMap?: Record<
    string,
    "beginner" | "intermediate" | "advanced" | "expert"
  >;
  className?: string;
  showProficiency?: boolean;
};

export function SkillsList({
  skills,
  iconMap = {},
  proficiencyMap = {},
  className,
  showProficiency = false,
}: SkillsListProps) {
  if (!skills || skills.length === 0) {
    return <span className="text-muted-foreground text-sm">N/A</span>;
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {skills.map((skill) => (
        <SkillBadge
          key={skill}
          skill={skill}
          icon={iconMap[skill]}
          proficiency={proficiencyMap[skill]}
          showProficiency={showProficiency}
        />
      ))}
    </div>
  );
}

export type SkillCategoryCardProps = {
  title: string;
  skills: Array<{
    name: string;
    icon: React.ReactNode;
    proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
  }>;
  showProficiency?: boolean;
  className?: string;
};

export function SkillCategoryCard({
  title,
  skills,
  showProficiency = false,
  className,
}: SkillCategoryCardProps) {
  return (
    <div
      className={cn(
        "space-y-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
        className,
      )}
    >
      <h3
        className="text-sm font-bold uppercase tracking-wider flex items-center gap-2"
        style={{ color: "var(--secondary)" }}
      >
        <span className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            skill={skill.name}
            icon={skill.icon}
            proficiency={skill.proficiency}
            showProficiency={showProficiency}
          />
        ))}
      </div>
    </div>
  );
}
