export interface Education {
  _id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  createdAt: string;
  updatedAt: string;
}

export const educationData: Education[] = [
  {
    _id: "edu_1",
    degree: "Diploma in Software Engineering and Database Systems",
    institution: "Al-Azhar University",
    location: "Gaza, Palestine",
    startDate: "2020-09-01",
    endDate: "2022-06-30",
    current: false,
    description:
      "Studied Software Engineering and Database Systems with a strong emphasis on building secure applications, system architecture, and robust data management. Developed a solid foundation in modern programming practices and problem-solving within diverse technology environments.",
    achievements: [
      "Specialized in Software Engineering and Database Systems",
      "Built secure applications with strong system architecture principles",
      "Mastered database design, administration, and data integrity",
      "Enhanced problem-solving and analytical skills through practical projects",
    ],
    createdAt: "2022-07-01T00:00:00.000Z",
    updatedAt: "2025-07-11T00:00:00.000Z",
  },
];
