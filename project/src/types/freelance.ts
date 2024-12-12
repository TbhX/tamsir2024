export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface ClientProject {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  startDate: string;
  endDate?: string;
  files: ProjectFile[];
  updates: ProjectUpdate[];
}

export interface ProjectFile {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
}

export interface ProjectUpdate {
  id: string;
  content: string;
  timestamp: string;
  author: string;
}