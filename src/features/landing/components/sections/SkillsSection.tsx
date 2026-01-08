"use client";

import { ALL_SKILLS, skillIconMap } from "@/features/skills/components/all-skills";
import { SkillsList } from "@/features/skills/components/skills";
import { ReactNode } from "react";

type Skill = {
  name: string;
  icon?: ReactNode; // <-- allow undefined or any ReactNode
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

// Group skills by category dynamically
const categories: SkillCategory[] = Array.from(
  ALL_SKILLS.reduce((map, skill) => {
    if (!map.has(skill.category)) map.set(skill.category, []);
    map.get(skill.category)!.push(skill as Skill); // cast here
    return map;
  }, new Map<string, Skill[]>()),
).map(([title, skills]) => ({ title, skills }));

export default function SkillsSection() {
  return (
    <section className="w-full">
      <header className="mb-6">
        <h1
          className="section-title"
          style={{ color: "var(--headline)", borderColor: "var(--border)" }}
          data-ninja-font="doto_bold_normal_rg90b"
        >
          Skills{" "}
        </h1>
        <p
          className="font-figtree text-sm mt-2 mb-4"
          style={{ color: "var(--paragraph)" }}
          data-ninja-font="figtree_light_normal_rmlnd"
        >
          These are the technologies I've learned and worked with. This list is
          constantly evolving as I continue to learn and grow as a developer.
        </p>
      </header>

      {categories.map(({ title, skills }) => (
        <div key={title} className="mb-6">
          <h3
            className="font-figtree font-medium mb-1 uppercase tracking-wider text-sm"
            style={{ color: "var(--paragraph)" }}
          >
            &lt; {title} /&gt;
          </h3>
          <SkillsList
            skills={skills.map((s) => s.name)}
            iconMap={skillIconMap}
          />
        </div>
      ))}
    </section>
  );
}
