"use client";

import { ExperienceList } from "./ExperienceList";

export default function ExperienceSection() {


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
      <ExperienceList  />
    </section>
  );
}
