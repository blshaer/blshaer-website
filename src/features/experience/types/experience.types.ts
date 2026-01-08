import { ExperienceItemType as BaseExperienceItemType } from "@/features/experience/components/WorkExperience";

export type ExperienceItemType = BaseExperienceItemType & {
  companyUrl?: string;
};
