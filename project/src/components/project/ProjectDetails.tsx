import React, { memo } from 'react';
import { Users } from 'lucide-react';
import type { Project } from '@/types/project';

interface ProjectDetailsProps {
  project: Project;
  onUpdate: (updates: Partial<Project>) => void;
}

export const ProjectDetails = memo(function ProjectDetails({ 
  project,
  onUpdate 
}: ProjectDetailsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Info */}
      <div className="lg:col-span-2 space-y-6">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-600">{project.description}</p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Team</h2>
          <div className="space-y-4">
            {project.team.map(member => (
              <div key={member.id} className="flex items-center gap-3">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Dates</h2>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-gray-500">Start Date:</span>
              <span className="text-gray-900">
                {new Date(project.startDate).toLocaleDateString()}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-500">End Date:</span>
              <span className="text-gray-900">
                {new Date(project.endDate).toLocaleDateString()}
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
});