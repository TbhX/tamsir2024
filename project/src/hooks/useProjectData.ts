```ts
import { useState, useEffect, useCallback } from 'react';
import type { Project } from '@/types/project';

export function useProjectData() {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchProject = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulated API call
        const mockProject = {
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
        
        if (mounted) {
          setProject(mockProject);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load project data');
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProject();

    return () => {
      mounted = false;
    };
  }, []);

  const sendMessage = useCallback(async (message: string) => {
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
  }, [project]);

  const uploadFile = useCallback(async (file: File) => {
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
  }, [project]);

  return {
    project,
    isLoading,
    error,
    sendMessage,
    uploadFile
  };
}
```