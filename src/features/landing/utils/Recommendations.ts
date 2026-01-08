export interface Recommendation {
  _id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  relationship: "Client" | "Colleague" | "Manager" | "Other";
  avatar?: string;
  featured: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export const recommendationsData: Recommendation[] = [
  {
    _id: "rec_1",
    name: "Fahad Hummadi",
    position: "Senior Business Architect",
    company: "Perfect Touch (PTIT)",
    text: "Baraa consistently demonstrated exceptional technical skills in front-end development, with a keen eye for detail and a deep understanding of modern web technologies. He was highly dedicated, eager to learn, and contributed significantly to our projects. I am confident he will bring the same level of professionalism, commitment, and expertise to any team he joins.",
    relationship: "Manager",
    avatar: "",
    featured: true,
    date: "2023-09-30T00:00:00.000Z",
    createdAt: "2023-09-30T00:00:00.000Z",
    updatedAt: "2023-09-30T00:00:00.000Z",
  },
  {
    _id: "rec_2",
    name: "Ali Khaled",
    position: "Front-end Engineer",
    company: "Sustainable Star",
    text: "It was an absolute privilege to work with Baraa. His exceptional skills as a developer, combined with his dedication to delivering high-quality work, made every project a success. Baraa solves complex problems efficiently and his collaborative spirit makes him an asset to any team. I have no doubt he will achieve great things.",
    relationship: "Colleague",
    avatar: "",
    featured: true,
    date: "2023-10-31T00:00:00.000Z",
    createdAt: "2023-10-31T00:00:00.000Z",
    updatedAt: "2023-10-31T00:00:00.000Z",
  },
  {
    _id: "rec_3",
    name: "Mohammed Abu Harb",
    position: "Digital Product Designer",
    company: "Sustainable Star",
    text: "I’m thrilled to recommend Baraa, an incredibly skilled developer I’ve had the pleasure of working with. His technical abilities are top-notch and his passion for development is clear in every project. Baraa brings a positive attitude and strong problem-solving skills, delivering high-quality work every time.",
    relationship: "Colleague",
    avatar: "",
    featured: true,
    date: "2023-10-31T00:00:00.000Z",
    createdAt: "2023-10-31T00:00:00.000Z",
    updatedAt: "2023-10-31T00:00:00.000Z",
  },
];
