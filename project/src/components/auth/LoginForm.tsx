import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, AlertCircle, KeyRound } from 'lucide-react';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { validateAccessCode } from '@/utils/security/accessCode';

interface LoginFormProps {
  onSuccess: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !accessCode || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const isValid = await validateAccessCode(accessCode, email);
      
      if (isValid) {
        onSuccess();
      } else {
        setError('Code d\'accès invalide ou expiré. Veuillez vérifier votre email.');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
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
            Accès au Tableau de Bord
          </h1>
          <p className="text-gray-400">
            Entrez votre email et le code d'accès reçu
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-200">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Entrez votre email"
                  required
                />
                <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>
            </div>

            <div>
              <label htmlFor="accessCode" className="block text-sm font-medium text-gray-400 mb-2">
                Code d'Accès
              </label>
              <div className="relative">
                <input
                  id="accessCode"
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Entrez votre code d'accès"
                  maxLength={12}
                  required
                />
                <Lock className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!email || !accessCode || isLoading}
            className="w-full flex items-center justify-center gap-3 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            {isLoading ? (
              <>
                <LoadingSpinner size="sm" />
                Vérification...
              </>
            ) : (
              'Accéder au Tableau de Bord'
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Besoin d'aide ? Contactez{' '}
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