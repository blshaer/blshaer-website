"use client";

import { ExperienceList } from "./ExperienceList";

const experiences = [
  {
    id: "samtax",
    companyName: "SamTax",
    logo: "/logos/companies/samtax.png",
    positions: [
      {
        id: "samtax-fullstack",
        title: "Full Stack Developer",
        employmentPeriod: "Jun 2025 – Dec 2025",
        employmentType: "Full-time",
        location: "United States · Remote",
        description: `
• Built and maintained a secure full-stack web platform.
• Implemented internal automation tools.
• Developed admin and client dashboards.
        `,
        isExpanded: true
      }
    ]
  },
  {
    id: "sustainablestar",
    companyName: "Sustainable Star LLC",
    logo: "/logos/companies/sustainablestar.png",
    positions: [
      {
        id: "sustainable-frontend",
        title: "Frontend Developer",
        employmentPeriod: "Jul 2023 – Nov 2023",
        employmentType: "Full-time",
        location: "Riyadh · Remote",
        description: `
• Contributed to the Sustainable Star Form Builder.
• Built responsive and accessible UI components.
        `
      }
    ]
  },
  {
    id: "ptit",
    companyName: "Perfect Touch IT",
    logo: "/logos/companies/ptit.png",
    positions: [
      {
        id: "ptit-frontend",
        title: "Frontend Developer",
        employmentPeriod: "Jul 2023 – Sep 2023",
        employmentType: "Part-time",
        location: "Riyadh · Remote",
        description: `
• Improved performance and refactored legacy code.
• Collaborated with backend and design teams.
        `
      }
    ]
  },
  {
    id: "gedco",
    companyName: "GEDCO",
    logo: "/logos/companies/gedco.png",
    positions: [
      {
        id: "gedco-intern",
        title: "Software Engineer Intern",
        employmentPeriod: "Apr 2022 – Jun 2022",
        employmentType: "Internship",
        location: "Gaza · On-site",
        description: `
• Assisted in real-world software projects.
• Strengthened core engineering skills.
        `
      }
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section className="w-full">
      <ExperienceList experiences={experiences} />
    </section>
  );
}
