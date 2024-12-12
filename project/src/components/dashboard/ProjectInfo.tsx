import React from 'react';
import type { Project } from '@/types/dashboard';

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        Project Details
      </h3>
      <div className="space-y-3 text-gray-300">
        <p>Timeline: {project.timeline}</p>
        <p>Start Date: {new Date(project.startDate).toLocaleDateString()}</p>
        <p>Expected Completion: {new Date(project.completionDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
}