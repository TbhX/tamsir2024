import { useState, useCallback } from 'react';
import type { Project, ProjectMessage, ProjectFile } from '@/types/dashboard';

export function useProjectData() {
  const [project, setProject] = useState<Project>({
    id: '1',
    status: 'in-progress',
    timeline: 'normal',
    startDate: new Date().toISOString(),
    completionDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdate: new Date().toISOString(),
    messages: [],
    files: [],
    updates: []
  });

  const sendMessage = useCallback((content: string) => {
    const newMessage: ProjectMessage = {
      id: Date.now().toString(),
      content,
      sender: 'Client',
      timestamp: new Date().toISOString(),
      isClient: true
    };

    setProject(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  }, []);

  const uploadFile = useCallback((file: File) => {
    const newFile: ProjectFile = {
      id: Date.now().toString(),
      name: file.name,
      url: URL.createObjectURL(file),
      uploadedAt: new Date().toISOString(),
      size: file.size
    };

    setProject(prev => ({
      ...prev,
      files: [...prev.files, newFile]
    }));
  }, []);

  return {
    project,
    sendMessage,
    uploadFile,
    isLoading: false,
    error: null
  };
}