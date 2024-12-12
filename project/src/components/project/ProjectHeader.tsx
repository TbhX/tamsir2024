import React, { memo } from 'react';
import { Clock, FileText } from 'lucide-react';
import type { Project } from '@/types/project';

interface ProjectHeaderProps {
  project: Project;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const ProjectHeader = memo(function ProjectHeader({ 
  project, 
  activeSection, 
  onSectionChange 
}: ProjectHeaderProps) {
  const tabs = [
    { id: 'details', label: 'Project Details', icon: FileText },
    { id: 'timeline', label: 'Timeline', icon: Clock }
  ];

  return (
    <header className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>Status: {project.status}</span>
          <span>•</span>
          <span>Progress: {project.progress}%</span>
        </div>
      </div>

      <nav className="flex gap-4 border-b border-gray-200">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`
              flex items-center gap-2 px-4 py-2 text-sm font-medium 
              ${activeSection === id 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
});