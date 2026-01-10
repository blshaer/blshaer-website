import { SkillsList } from "@/features/skills/components/skills";

export function ProjectTechnologies({
  technologies,
}: {
  technologies: string[];
}) {
  return <SkillsList skills={technologies} />;
}
