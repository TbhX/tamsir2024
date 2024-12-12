import React from 'react';

interface FormSubmitButtonProps {
  children: React.ReactNode;
}

export function FormSubmitButton({ children }: FormSubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 
                 text-white font-medium rounded-lg hover:bg-indigo-700 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                 transition-colors"
    >
      {children}
    </button>
  );
}