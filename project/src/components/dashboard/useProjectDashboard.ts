import { useState, useEffect } from 'react';
import { validateAccessCode } from '@/utils/security';
import type { Project } from '@/types/dashboard';

export function useProjectDashboard(accessCode: string) {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const isValid = await validateAccessCode(accessCode);
        if (!isValid) {
          setError('Invalid or expired access code');
          return;
        }

        // In a real app, fetch project data from API
        const projectData = await mockFetchProject(accessCode);
        setProject(projectData);
      } catch (err) {
        setError('Failed to load project data');
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [accessCode]);

  const sendMessage = async (message: string) => {
    if (!project) return;

    const newMessage = {
      id: Date.now().toString(),
      content: message,
      sender: 'Client',
      timestamp: new Date().toISOString(),
      isClient: true
    };

    setProject(prev => prev ? {
      ...prev,
      messages: [...prev.messages, newMessage]
    } : null);
  };

  const uploadFile = async (file: File) => {
    if (!project) return;

    const newFile = {
      id: Date.now().toString(),
      name: file.name,
      url: URL.createObjectURL(file),
      uploadedAt: new Date().toISOString(),
      size: file.size
    };

    setProject(prev => prev ? {
      ...prev,
      files: [...prev.files, newFile]
    } : null);
  };

  return {
    project,
    isLoading,
    error,
    sendMessage,
    uploadFile
  };
}

// Mock function for development
async function mockFetchProject(accessCode: string): Promise<Project> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    id: '1',
    status: 'in-progress',
    timeline: 'normal',
    startDate: new Date().toISOString(),
    completionDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdate: new Date().toISOString(),
    messages: [],
    files: [],
    updates: []
  };
}