export interface ProjectType {
  _id: string;
  name: string;
  description: string;
  icon: {
    library: string;
    name: string;
  };
  color: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const PROJECT_TYPES_DATA: ProjectType[] = [
  {
    _id: "type_1",
    name: "Web Application",
    description: "Full-stack web applications built with modern frameworks",
    icon: {
      library: "fa",
      name: "FaGlobe",
    },
    color: "#3B82F6",
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
  {
    _id: "type_2",
    name: "Frontend",
    description: "Client-side applications and user interfaces",
    icon: {
      library: "fa",
      name: "FaReact",
    },
    color: "#10B981",
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
  {
    _id: "type_3",
    name: "API",
    description: "Backend APIs and server-side applications",
    icon: {
      library: "fa",
      name: "FaServer",
    },
    color: "#F59E0B",
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
  {
    _id: "type_4",
    name: "Tool",
    description: "Developer tools and utilities",
    icon: {
      library: "fa",
      name: "FaTools",
    },
    color: "#8B5CF6",
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
];
