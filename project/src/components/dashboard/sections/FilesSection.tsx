import React from 'react';
import { FileText, Upload, Download } from 'lucide-react';
import type { ProjectFile } from '@/types/dashboard';

interface FilesSectionProps {
  files: ProjectFile[];
  onUploadFile: (file: File) => Promise<void>;
}

export function FilesSection({ files, onUploadFile }: FilesSectionProps) {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await onUploadFile(file);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Project Files
      </h2>

      {/* File List */}
      <div className="space-y-3 mb-6">
        {files.map((file) => (
          <a
            key={file.id}
            href={file.url}
            download
            className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
          >
            <FileText className="w-5 h-5 text-gray-400" />
            <span className="flex-grow text-white">{file.name}</span>
            <Download className="w-5 h-5 text-gray-400 group-hover:text-white" />
          </a>
        ))}
      </div>

      {/* Upload Button */}
      <label className="block">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="flex items-center justify-center gap-2 p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg cursor-pointer transition-colors">
          <Upload className="w-5 h-5 text-white" />
          <span className="text-white font-medium">Upload File</span>
        </div>
      </label>
    </div>
  );
}