// Maps work experience skill names to standardized skill names
export const SKILL_NAME_MAP: Record<string, string> = {
  // Frontend
  React: "React.js",
  "Next.js": "Next.js",
  "Tailwind CSS": "Tailwind CSS",
  "Redux Toolkit": "React.js", // Map to React since we don't have Redux icon
  CSS3: "CSS3",
  HTML5: "HTML5",

  // Backend
  "Node.js": "Node.js",
  "Express.js": "Express.js",
  MongoDB: "MongoDB",
  PostgreSQL: "PostgreSQL",
  MySQL: "MySQL",
  Prisma: "Prisma",

  // Languages
  TypeScript: "TypeScript",
  JavaScript: "JavaScript",
  "JavaScript ES6+": "JavaScript",
  Python: "Python",
  Java: "Java",

  // Tools
  Git: "Git",
  Docker: "Docker",
  Webpack: "Webpack",
  Firebase: "Firebase",

  // APIs
  "REST APIs": "RESTful APIs",
  "RESTful APIs": "RESTful APIs",

  // Others - map to similar icons
  "AI Integration": "OpenAI API",
  "Payment Systems": "Node.js",
  "Systems Design": "System Design",
  Axios: "Node.js",
  "Legacy Code Optimization": "OOP",
  "Package Management": "Node.js",
  "SQL Server Administration": "MySQL",
  "Database Security": "MySQL",
  "Network Security Monitoring": "Git",
  "Security Compliance": "Git",
  "Vulnerability Management": "Git",
  "Data Backup Solutions": "Docker",
  "Software Engineering": "OOP",
  "Database Systems": "MongoDB",
  "Secure Applications": "JWT & OAuth",
  "System Architecture": "System Design",
  "Programming Practices": "OOP",
  "Problem Solving": "OOP",
};

export const normalizeSkillName = (skillName: string): string => {
  return SKILL_NAME_MAP[skillName] || skillName;
};
