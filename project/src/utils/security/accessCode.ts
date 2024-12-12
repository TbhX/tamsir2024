import { customAlphabet } from 'nanoid';
import { ACCESS_CODE } from '@/config';

// Generate a secure, random access code
const generateCode = customAlphabet('23456789ABCDEFGHJKLMNPQRSTUVWXYZ', ACCESS_CODE.length);

// Store active access codes (in a real app, this would be in a database)
const activeAccessCodes = new Map<string, {
  email: string;
  createdAt: number;
}>();

export const createAccessCode = (email: string): string => {
  const code = generateCode();
  activeAccessCodes.set(code, {
    email,
    createdAt: Date.now()
  });
  return code;
};

export const validateAccessCode = async (code: string, email: string): Promise<boolean> => {
  const record = activeAccessCodes.get(code);
  if (!record) return false;
  
  // Verify email matches
  if (record.email !== email) return false;
  
  // Check if code is expired (24 hours)
  const isExpired = Date.now() - record.createdAt > ACCESS_CODE.expiryHours * 60 * 60 * 1000;
  if (isExpired) {
    activeAccessCodes.delete(code);
    return false;
  }
  
  return true;
};