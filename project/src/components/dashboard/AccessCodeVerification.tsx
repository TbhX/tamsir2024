import React, { useState } from 'react';
import { KeyRound, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { validateAccessCode } from '@/utils/security/accessCode';

interface AccessCodeVerificationProps {
  email: string;
  onVerify: () => void;
}

export function AccessCodeVerification({ email, onVerify }: AccessCodeVerificationProps) {
  const [accessCode, setAccessCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessCode.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const isValid = await validateAccessCode(accessCode.trim(), email);
      
      if (isValid) {
        onVerify();
      } else {
        setError('Invalid or expired access code. Please check your email for the correct code.');
      }
    } catch (err) {
      setError('An error occurred while verifying the code. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <KeyRound className="w-16 h-16 mx-auto mb-4 text-indigo-400" />
          <h1 className="text-3xl font-bold text-white mb-2">
            Project Dashboard Access
          </h1>
          <p className="text-gray-400">
            Enter the access code sent to {email}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-200">{error}</p>
            </div>
          )}

          <div className="relative">
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
              placeholder="Enter access code"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              maxLength={12}
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={!accessCode.trim() || isSubmitting}
            className="w-full flex items-center justify-center gap-3 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner size="sm" />
                Verifying...
              </>
            ) : (
              'Access Dashboard'
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Need help? Contact{' '}
          <a 
            href="mailto:support@tamsir.fr" 
            className="text-indigo-400 hover:text-indigo-300"
          >
            support@tamsir.fr
          </a>
        </p>
      </motion.div>
    </div>
  );
}