"use client";

import PostSection from "@/features/blog/components/PostSection";
import HeroSection from "@/features/landing/components/sections/HeroSection";
import RecommendationsSection from "@/features/landing/components/sections/RecommendationsSection";
import SkillsSection from "@/features/landing/components/sections/SkillsSection";
import WorkSection from "@/features/experience/components/WorkExperienceSection";
import Projects from "@/features/projects/components/Projects";
import { mailto } from "@/shared/data";
import { ScrollEffect } from "@/shared/lib/animations";
import { Button } from "@/shared/ui";
import ClickSpark from "@/shared/ui/ClickSpark";
import ShinyText from "@/shared/ui/ShinyText";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <HeroSection />

      <div className="py-4 border-t mt-6">
        <SkillsSection />
      </div>

      <div id="work" className="py-4 border-t mt-6">
        <WorkSection />
      </div>

      <div id="projects" className="py-4 border-t mt-6">
        <Projects />
      </div>

      <div className="py-4 border-t mt-6">
        <RecommendationsSection />
      </div>

      <div className="py-4 border-t mt-6">
        <PostSection />
      </div>

      <ClickSpark
        sparkColor="var(--headline)"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <ScrollEffect type="fadeIn">
          <div className="mt-16 mb-12 text-center w-full mx-auto">
            <div className="p-8 rounded-2xl bg-[var(--card-background)] border border-[var(--card-border-color)] shadow-lg">
              <ShinyText
                text="Let's Work Together"
                disabled={false}
                speed={3}
                className="text-2xl md:text-3xl font-bold mb-4 "
              />
              <p className="text-[var(--paragraph)] mb-6 max-w-2xl mx-auto">
                I'm open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <Link href={mailto}>
                <Button
                  icon={<MdEmail className="h-4 w-4" />}
                  className="mx-auto flex-row-reverse"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </ScrollEffect>
      </ClickSpark>
    </div>
  );
}
