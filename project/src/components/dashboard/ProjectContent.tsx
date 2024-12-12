import React from 'react';
import { ChatSection, FilesSection, UpdatesSection } from './sections';
import { ProjectInfo } from './';
import type { Project } from '@/types/dashboard';

interface ProjectContentProps {
  project: Project;
  onSendMessage: (message: string) => Promise<void>;
  onUploadFile: (file: File) => Promise<void>;
}

export function ProjectContent({ 
  project, 
  onSendMessage, 
  onUploadFile 
}: ProjectContentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-8">
        <ChatSection
          messages={project.messages}
          onSendMessage={onSendMessage}
        />
        <UpdatesSection updates={project.updates} />
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        <FilesSection
          files={project.files}
          onUploadFile={onUploadFile}
        />
        <ProjectInfo project={project} />
      </div>
    </div>
  );
}