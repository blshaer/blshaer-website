import React from "react";
import ProfileHeader from "@/components/layout/profile-header";
import Projects from "@/components/sections/projects";
import WorkedAs from "@/components/sections/worked-as";
import Socials from "@/components/sections/socials";
import Recommendations from "@/components/sections/recommendations";
import Footer from "@/components/layout/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Ultra-Soft Top Glass Mask - Minimized */}
      <div className="fixed top-0 left-0 right-0 h-8 z-50 pointer-events-none bg-gradient-to-b from-background/95 via-background/30 to-transparent backdrop-blur-[1px]" />

      {/* Background aurora/glass glow for depth */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 dark:bg-blue-500/[0.03] blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-600/[0.04] dark:bg-blue-600/[0.02] blur-[100px] pointer-events-none" />

      <div className="container relative z-10 flex flex-col gap-8 md:gap-14 pt-20 md:pt-16 lg:pt-14 pb-0">
        <ProfileHeader />
        <WorkedAs />
        <Projects />
        <Recommendations />
        <Socials />
        <Footer />
      </div>
      {/* <ScrollToTop /> */}
    </main>
  );
}
