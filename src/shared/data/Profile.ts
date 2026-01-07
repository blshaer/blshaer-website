export interface Profile {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location?: string;
  bio?: string;
  avatar?: string;
  skills: string[];
  updatedAt: string;
}

export const profileData: Profile = {
  _id: "profile_1",
  firstName: "Baraa",
  lastName: "Alshaer",
  email: "blshaer@outlook.com",
  phone: "+970599349034",
  location: "Gaza Strip, Palestine",
  bio: "Passionate Full Stack Developer with expertise in React, Node.js, TypeScript, and modern web technologies. I specialize in engineering secure full-stack web applications, developing AI-powered automation tools, and creating dynamic user interfaces that solve real-world problems and provide excellent user experiences.",
  avatar:
    "https://cdn.dribbble.com/userupload/14186516/file/original-302bcec5d5a7d2bae6c18ee8cabc5f37.png?resize=400x400",
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React.js",
    "Next.js",
    "Express.js",
    "Node.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Bootstrap",
    "SASS",
    "Git",
    "Docker",
    "REST APIs",
    "Webpack",
    "UML",
    "Google Cloud Platform",
    "GitHub Actions",
    "Firebase",
    "JWT",
    "OAuth",
    "Systems Design",
    "OOP",
  ],
  updatedAt: "2024-01-01T00:00:00.000Z",
};
