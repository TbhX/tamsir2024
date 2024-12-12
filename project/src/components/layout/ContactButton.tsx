import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/config';

export function ContactButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const subject = encodeURIComponent('Project Inquiry');
    const body = encodeURIComponent(`Hello,

I'm interested in discussing a web development project.

Best regards`);
    
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
      >
        <Mail className="w-4 h-4" />
        <span>Contact Us</span>
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap">
          Send us an email
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800" />
        </div>
      )}
    </div>
  );
}