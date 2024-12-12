import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
}

export function FormField({
  label,
  type,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  options = []
}: FormFieldProps) {
  const id = label.toLowerCase().replace(/\s+/g, '-');

  const baseClasses = `
    w-full px-4 py-3 rounded-lg bg-gray-700 text-white border
    focus:outline-none focus:ring-2 transition-colors
    ${error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-600 focus:ring-indigo-500'
    }
  `;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-200 mb-2">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={`${baseClasses} placeholder-gray-400`}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClasses} ${!value && 'text-gray-400'}`}
        >
          <option value="" className="text-gray-400">
            {placeholder || `Select ${label.toLowerCase()}`}
          </option>
          {options.map(({ value, label }) => (
            <option key={value} value={value} className="text-white bg-gray-700">
              {label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`${baseClasses} placeholder-gray-400`}
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