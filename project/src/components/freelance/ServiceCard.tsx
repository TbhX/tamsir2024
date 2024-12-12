import React from 'react';
import * as Icons from 'lucide-react';
import type { Service } from '../../types/freelance';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {Icon && <Icon className="w-8 h-8 text-indigo-600 mr-3" />}
        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
      </div>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}