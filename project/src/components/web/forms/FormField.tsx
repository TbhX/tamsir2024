import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export function FormField({
  label,
  type,
  value,
  onChange,
  error,
  required = true,
  placeholder,
  options = []
}: FormFieldProps) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  const baseClasses = `
    w-full px-4 py-3 bg-gray-800 border rounded-lg text-white 
    placeholder-gray-500 focus:outline-none focus:ring-2 
    ${error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-700 focus:ring-indigo-500'
    }
  `;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
          rows={4}
          placeholder={placeholder}
          required={required}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
          required={required}
        >
          <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
          placeholder={placeholder}
          required={required}
        />
      )}

      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}