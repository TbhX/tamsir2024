// ... existing interfaces ...

export interface ProjectFormData {
  name: string;
  email: string;
  company?: string;
  description: string;
  timeline: string;
  _honeypot: string; // Hidden field for bot detection
}

// ... rest of the file ...