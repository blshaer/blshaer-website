import { ExperienceItemType as BaseExperienceItemType } from "@/features/experience/components/WorkExperience";

export type ExperienceItemType = BaseExperienceItemType & {
  companyUrl?: string;
};

export const EXPERIENCE_DATA: ExperienceItemType[] = [
  {
    id: "1",
    companyName: "Samtax",
    companyLogo: "/logos/companies/samtax.png", // make sure this file exists
    companyUrl: "https://sam-tax.com/",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1-1",
        title: "Full Stack Engineer",
        employmentPeriod: "June 2025 – December 2025",
        employmentType: "Full-time",
        description: `• Developed a web application for a business company with two dashboards (client and admin).\n
• Focused on scalable, robust, and secure application architecture.\n
• Collaborated with cross-functional teams to deliver high-quality features on time.`,
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Express.js",
          "MongoDB",
          "Node.js",
          "Systems Design",
        ],
        location: "Philadelphia, United States",
        isExpanded: true,
      },
    ],
  },

  {
    id: "2",
    companyName: "Sustainable Star LLC",
    companyLogo: "/logos/companies/sustainablestar.png",
    companyUrl: "https://www.linkedin.com/company/sustainable-star-sa/",
    isCurrentEmployer: false,
    positions: [
      {
        id: "2-1",
        title: "Frontend Developer",
        employmentPeriod: "July 2023 – November 2023",
        employmentType: "Full-time",
        description: `• Developed the Sustainable Star Form Builder platform with customizable forms and drag-and-drop functionality.\n
• Ensured responsive design and optimized frontend performance.\n
• Collaborated with designers and backend engineers to deliver new features.`,
        skills: [
          "React.js",
          "JavaScript ES6+",
          "CSS3",
          "TypeScript",
          "Tailwind CSS",
          "Redux Toolkit",
          "REST APIs",
          "Webpack",
          "Git",
          "Axios",
        ],
        location: "Riyadh, Saudi Arabia",
      },
    ],
  },

  {
    id: "3",
    companyName: "Perfect Touch (PTIT)",
    companyLogo: "/logos/companies/ptit.png",
    companyUrl: "https://ptit.com.sa/en/",
    isCurrentEmployer: false,
    positions: [
      {
        id: "3-1",
        title: "Frontend Developer",
        employmentPeriod: "June 2023 – September 2023",
        employmentType: "Full-time",
        description: `• Contributed to team projects, developed products, and improved usability and functionality.\n
• Maintained legacy projects and optimized code.\n
• Delivered high-quality solutions on schedule.`,
        skills: [
          "React",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Legacy Code Optimization",
          "Package Management",
        ],
        location: "Riyadh, Saudi Arabia",
      },
    ],
  },

  {
    id: "4",
    companyName: "Gaza Electricity Distribution Company (GEDCO)",
    companyLogo: "/logos/companies/gedco.png",
    companyUrl: "https://www.gedco.ps/",
    isCurrentEmployer: false,
    positions: [
      {
        id: "4-1",
        title: "Software Development Intern",
        employmentPeriod: "April 2022 – June 2022",
        employmentType: "Internship",
        description: `• Supported software development tasks and learned practical workflows.\n
• Assisted in database operations and internal software tools.`,
        skills: [
          "SQL Server Administration",
          "MySQL",
          "Database Security",
          "Network Security Monitoring",
        ],
        location: "Gaza, Palestine",
      },
    ],
  },

  {
    id: "5",
    companyName: "Freelance",
    isCurrentEmployer: false,
    positions: [
      {
        id: "5-1",
        title: "Full Stack Developer",
        employmentPeriod: "2022 – 2023",
        employmentType: "Contract",
        description: `• Developed full-stack web applications for various clients.\n
• Delivered end-to-end solutions including design, development, and deployment.`,
        skills: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "TypeScript",
          "REST APIs",
          "Tailwind CSS",
        ],
        location: "Remote",
      },
    ],
  },

  {
    id: "6",
    companyName: "Al-Azhar University",
    companyLogo: "/logos/universities/alazhar-logo.png",
    companyUrl: "https://www.alazhar.edu.ps/arabic/index.asp",
    isCurrentEmployer: false,
    positions: [
      {
        id: "6-1",
        title: "Software Engineering and Database Systems",
        employmentPeriod: "2020 – 2022",
        employmentType: "Education",
        description: `• Studied software engineering and database systems.\n
• Developed a solid foundation in programming, system architecture, and problem-solving.\n
• Engaged in hands-on projects and collaborative learning.`,
        skills: [
          "Software Engineering",
          "Database Systems",
          "Secure Applications",
          "System Architecture",
          "Programming Practices",
          "Problem Solving",
        ],
        location: "Gaza, Palestine",
      },
    ],
  },
];
