"use client";

import { WorkExperience } from "@/features/experience/components/WorkExperience";

export function ExperienceList({ experiences }: { experiences: any[] }) {
  return (
    <WorkExperience
      className="rounded-lg"
      experiences={experiences}
    />
  );
}
