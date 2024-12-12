import React from 'react';
import { AlertOctagon } from 'lucide-react';

interface ProjectErrorProps {
  message: string;
}

export function ProjectError({ message }: ProjectErrorProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <AlertOctagon className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}