import React, { memo } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import type { Project } from '@/types/project';

interface ProjectTimelineProps {
  project: Project;
}

export const ProjectTimeline = memo(function ProjectTimeline({ 
  project 
}: ProjectTimelineProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="space-y-8">
        {project.milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative">
            {/* Connector Line */}
            {index < project.milestones.length - 1 && (
              <div className="absolute top-8 left-3 bottom-0 w-0.5 bg-gray-200" />
            )}

            <div className="flex gap-4">
              {/* Status Icon */}
              <div className="flex-shrink-0 w-6 h-6">
                {milestone.completed ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400" />
                )}
              </div>

              {/* Content */}
              <div className="flex-grow pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 mb-2">{milestone.description}</p>
                <time className="text-sm text-gray-500">
                  Due: {new Date(milestone.dueDate).toLocaleDateString()}
                </time>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});