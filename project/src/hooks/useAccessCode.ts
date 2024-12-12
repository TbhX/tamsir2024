import { useState } from 'react';
import { validateAccessCode } from '@/utils/security/accessCode';

export function useAccessCode() {
  const [accessCode, setAccessCode] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyAccessCode = async (code: string) => {
    try {
      setError(null);
      const isValid = await validateAccessCode(code);
      
      if (isValid) {
        setAccessCode(code);
        setIsVerified(true);
      } else {
        setError('Invalid or expired access code. Please check your email for the correct code.');
      }
    } catch (err) {
      setError('An error occurred while verifying the access code. Please try again.');
    }
  };

  return {
    accessCode,
    isVerified,
    error,
    verifyAccessCode
  };
}