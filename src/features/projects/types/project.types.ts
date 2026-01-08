export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  website: string;
  github?: string;
  technologies: string[];
  status: string;
  featured: boolean;
  created: string;
  updated: string;
  videoUrl?: string;
  logoFileName: string;
}
