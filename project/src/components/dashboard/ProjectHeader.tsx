import React from 'react';
import type { Project } from '@/types/dashboard';

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-8 mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">
        Project Dashboard
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>Status: {project.status}</span>
        <span>•</span>
        <span>Last updated: {new Date(project.lastUpdate).toLocaleString()}</span>
      </div>
    </div>
  );
}