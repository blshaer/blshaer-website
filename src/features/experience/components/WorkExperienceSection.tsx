"use client";

import React from "react";
import { WorkExperience } from "@/shared/ui/work-experience";
import { WORK_EXPERIENCE } from "@/data/work-experience";

export default function WorkSection() {
  return (
    <section className="w-full ibmsans">
      <h2 className="section-title">Experience</h2>
      <WorkExperience className="rounded-lg" experiences={WORK_EXPERIENCE} />
    </section>
  );
}
