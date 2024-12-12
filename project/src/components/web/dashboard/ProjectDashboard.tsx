import React, { useState } from 'react';
import { MessageSquare, FileText, Bell } from 'lucide-react';
import type { Project, ProjectUpdate, ProjectFile } from '../../../types/web';

interface ProjectDashboardProps {
  project: Project;
  onAddUpdate: (update: Omit<ProjectUpdate, 'id' | 'timestamp'>) => void;
  onUploadFile: (file: File) => void;
}

export function ProjectDashboard({ project, onAddUpdate, onUploadFile }: ProjectDashboardProps) {
  const [message, setMessage] = useState('');

  const handleSubmitUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    onAddUpdate({
      message,
      isClient: true,
      attachments: []
    });
    setMessage('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUploadFile(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Project Header */}
        <div className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-2">Project Dashboard</h1>
          <p className="text-gray-200">Status: {project.status}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Updates Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Project Updates
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {project.updates.map((update) => (
                  <div
                    key={update.id}
                    className={`p-4 rounded-lg ${
                      update.isClient ? 'bg-indigo-50 ml-4' : 'bg-white border mr-4'
                    }`}
                  >
                    <p className="text-gray-900">{update.message}</p>
                    <span className="text-sm text-gray-500">{update.timestamp}</span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmitUpdate} className="mt-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                />
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Files Section */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Project Files
              </h2>
              <div className="space-y-2">
                {project.files.map((file) => (
                  <a
                    key={file.id}
                    href={file.url}
                    className="block p-3 bg-white rounded-lg hover:bg-gray-50"
                  >
                    <p className="font-medium">{file.name}</p>
                    <span className="text-sm text-gray-500">
                      {new Date(file.uploadedAt).toLocaleDateString()}
                    </span>
                  </a>
                ))}
              </div>
              <label className="mt-4 block">
                <span className="sr-only">Upload file</span>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </label>
            </div>

            {/* Notifications */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Recent Activity
              </h2>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Last activity: {new Date(project.lastActivity).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}