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
