import { WorkExperience } from "@/features/experience/components/WorkExperience";



export function ExperienceList({ experiences }: any) {
  return (
    <WorkExperience
      className="rounded-lg"
      experiences={experiences}
    />
  );
}
