"use client";

import Projects from "@/features/projects/components/Projects";
import ProjectTypeSelect from "@/features/projects/components/ProjectTypeSelect";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import { useState } from "react";

export default function ProjectsPageClient() {
  const [filterType, setFilterType] = useState<string>("all");

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  return (
    <div className="projectCards flex min-h-[100vh] w-full flex-col gap-5 max-md:pb-0 max-md:pt-[50px]">
      <div className="header">
        <h1 className="header-title">Projects</h1>
        <p className="description max-w-[100%]">
          I have worked on a variety of projects, here are some of the ones I'm
          particularly proud of.
        </p>
        <div className="py-5 flex justify-between items-center w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href={"/"} className={styles.breadcrumbLink}>
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={"/projects"}
                  className={styles.breadcrumbLink}
                >
                  Projects
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <ProjectTypeSelect onSelect={(value) => setFilterType(value)} />
        </div>
      </div>

      <Projects />
    </div>
  );
}
