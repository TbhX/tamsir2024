import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

export function SocialLink({ icon: Icon, href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}