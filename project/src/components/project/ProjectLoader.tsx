import React from 'react';
import { Loader2 } from 'lucide-react';

export function ProjectLoader() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Loading project data...</p>
      </div>
    </div>
  );
}