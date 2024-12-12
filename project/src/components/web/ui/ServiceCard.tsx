import React from 'react';
import * as Icons from 'lucide-react';
import type { Service } from '../../../types/web';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <div className="group relative bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      <div className="relative">
        {Icon && <Icon className="w-12 h-12 text-white mb-4" />}
        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
      </div>
    </div>
  );
}