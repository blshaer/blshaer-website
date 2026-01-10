// Global Type Definitions
// This file contains all TypeScript type definitions used across the application

// ============================================================================
// Core Entity Types
// ============================================================================

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  projectType: string;
  images: string[];
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl?: string;
  websiteUrl?: string;
  videoUrl?: string;
  startDate?: string;
  endDate?: string;
  client?: string;
  teamSize?: number;
  role?: string;
  challenges?: string;
  solutions?: string;
  results?: string;
  metrics?: ProjectMetrics;
  createdAt: string;
  updatedAt: string;
}

export interface Experience {
  _id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location?: string;
  type: "full-time" | "part-time" | "contract" | "freelance" | "internship";
  skills: string[];
  achievements: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Education {
  _id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  gpa?: number;
  description?: string;
  achievements: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Recommendation {
  _id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  linkedinUrl?: string;
  relationship: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SocialLink {
  _id: string;
  platform: string;
  username: string;
  url: string;
  visible: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  replied: boolean;
  priority: "low" | "medium" | "high";
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  _id: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

// ============================================================================
// Enum Types
// ============================================================================

export type ProjectStatus =
  | "draft"
  | "in-progress"
  | "completed"
  | "published"
  | "archived";

export type NotificationType =
  | "message"
  | "system"
  | "success"
  | "warning"
  | "error"
  | "info";

export type UserRole = "admin" | "user" | "moderator";

export type ProjectType =
  | "web-app"
  | "mobile-app"
  | "desktop-app"
  | "api"
  | "library"
  | "tool"
  | "other";

export type ExperienceType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "internship";

export type MessagePriority = "low" | "medium" | "high";

export type SortDirection = "asc" | "desc";

// ============================================================================
// Component Props Types
// ============================================================================

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FormProps extends BaseComponentProps {
  onSubmit: (data: any) => void | Promise<void>;
  isLoading?: boolean;
  initialData?: any;
  validationSchema?: any;
}

export interface ListProps<T> extends BaseComponentProps {
  items: T[];
  isLoading?: boolean;
  onItemClick?: (item: T) => void;
  onItemEdit?: (item: T) => void;
  onItemDelete?: (item: T) => void;
  searchQuery?: string;
  filters?: Record<string, any>;
  sortBy?: string;
  sortDirection?: SortDirection;
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, item: T) => React.ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface TableProps<T> extends BaseComponentProps {
  data: T[];
  columns: TableColumn<T>[];
  isLoading?: boolean;
  pagination?: PaginationProps;
  selection?: {
    selectedItems: T[];
    onSelectionChange: (items: T[]) => void;
  };
  actions?: {
    label: string;
    onClick: (item: T) => void;
    icon?: React.ReactNode;
    variant?: "default" | "destructive" | "outline";
  }[];
}

// ============================================================================
// API Response Types
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginationProps {
  page: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
  onLimitChange?: (limit: number) => void;
}

// ============================================================================
// Form Data Types
// ============================================================================

export interface ProjectFormData {
  title: string;
  description: string;
  projectType: string;
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl?: string;
  websiteUrl?: string;
  videoUrl?: string;
  startDate?: string;
  endDate?: string;
  client?: string;
  teamSize?: number;
  role?: string;
  challenges?: string;
  solutions?: string;
  results?: string;
}

export interface ExperienceFormData {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location?: string;
  type: ExperienceType;
  skills: string[];
  achievements: string[];
}

export interface EducationFormData {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  gpa?: number;
  description?: string;
  achievements: string[];
}

export interface ProfileFormData {
  name: string;
  email: string;
  bio: string;
  location: string;
  website?: string;
  phone?: string;
  availability: boolean;
  hourlyRate?: number;
  skills: string[];
  languages: string[];
}

export interface MessageFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ============================================================================
// Utility Types
// ============================================================================

export interface ProjectMetrics {
  views?: number;
  likes?: number;
  shares?: number;
  downloads?: number;
  stars?: number;
  forks?: number;
}

export interface FilterOptions {
  projectTypes: string[];
  technologies: string[];
  statuses: ProjectStatus[];
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface SearchOptions {
  query: string;
  fields: string[];
  fuzzy?: boolean;
  caseSensitive?: boolean;
}

export interface SortOptions {
  field: string;
  direction: SortDirection;
}

// ============================================================================
// Context Types
// ============================================================================

export interface SidebarContextType {
  sidebarOpen: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  closeSidebar: () => void;
  openSidebar: () => void;
}

export interface ThemeContextType {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
  resolvedTheme: "light" | "dark";
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// ============================================================================
// Event Types
// ============================================================================

export interface CustomEvent<T = any> {
  type: string;
  payload: T;
  timestamp: number;
}

export interface FileUploadEvent {
  file: File;
  progress: number;
  status: "uploading" | "success" | "error";
  url?: string;
  error?: string;
}

// ============================================================================
// Configuration Types
// ============================================================================

export interface AppConfig {
  name: string;
  version: string;
  description: string;
  author: string;
  repository: string;
  homepage: string;
  features: {
    analytics: boolean;
    notifications: boolean;
    darkMode: boolean;
    multiLanguage: boolean;
  };
  limits: {
    maxFileSize: number;
    maxProjects: number;
    maxImages: number;
  };
}

export interface DatabaseConfig {
  url: string;
  name: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
  };
}

// ============================================================================
// Error Types
// ============================================================================

export interface AppError {
  code: string;
  message: string;
  details?: any;
  stack?: string;
}

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

export interface ApiError extends AppError {
  status: number;
  endpoint: string;
  method: string;
}
