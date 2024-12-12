import React from 'react';
import { Bell } from 'lucide-react';
import type { ProjectUpdate } from '@/types/dashboard';

interface UpdatesSectionProps {
  updates: ProjectUpdate[];
}

export function UpdatesSection({ updates }: UpdatesSectionProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Project Updates
      </h2>

      <div className="space-y-4">
        {updates.map((update) => (
          <div
            key={update.id}
            className="p-4 bg-gray-700 rounded-lg"
          >
            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white mb-2">{update.content}</p>
                <div className="text-sm text-gray-400">
                  {update.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}