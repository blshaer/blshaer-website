import { WorkExperience } from "@/features/experience/components/WorkExperience";
import { ExperienceItemType } from "../types/experience.types";

interface Props {
  experiences: ExperienceItemType[];
}

export function ExperienceList({ experiences }: Props) {
  return (
    <WorkExperience
      className="rounded-lg"
      experiences={experiences}
    />
  );
}
