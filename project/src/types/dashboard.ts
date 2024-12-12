export interface Project {
  id: string;
  status: 'pending' | 'in-progress' | 'completed';
  timeline: string;
  startDate: string;
  completionDate: string;
  lastUpdate: string;
  messages: ProjectMessage[];
  files: ProjectFile[];
  updates: ProjectUpdate[];
}

export interface ProjectMessage {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  isClient: boolean;
}

export interface ProjectFile {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
  size: number;
}

export interface ProjectUpdate {
  id: string;
  content: string;
  timestamp: string;
}