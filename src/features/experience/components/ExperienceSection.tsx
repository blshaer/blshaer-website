"use client";

import { useExperiences } from "../hooks/use-experiences";
import { ExperienceList } from "./ExperienceList";

export default function ExperienceSection() {
  const { experiences, loading, error } = useExperiences();

  if (loading) return null;
  if (error) return null;

  return (
    <section className="w-full ibmsans">
      <h2 className="section-title">Experience</h2>
           <p
          className="font-figtree text-sm mt-2 mb-4"
          style={{ color: "var(--paragraph)" }}
          data-ninja-font="figtree_light_normal_rmlnd"
        >
   My work experience.
        </p>
      <ExperienceList experiences={experiences} />
    </section>
  );
}
