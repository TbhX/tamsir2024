import { customAlphabet } from 'nanoid';

// Generate a secure, random access code
const generateAccessCode = customAlphabet('23456789ABCDEFGHJKLMNPQRSTUVWXYZ', 12);

// Store active access codes (in a real app, this would be in a database)
const activeAccessCodes = new Map<string, {
  email: string;
  projectId: string;
  createdAt: number;
}>();

export const createAccessCode = (email: string, projectId: string) => {
  const code = generateAccessCode();
  activeAccessCodes.set(code, {
    email,
    projectId,
    createdAt: Date.now()
  });
  return code;
};

export const validateAccessCode = (code: string, email: string) => {
  const record = activeAccessCodes.get(code);
  if (!record) return false;
  
  // Verify email matches
  if (record.email !== email) return false;
  
  // Check if code is expired (24 hours)
  const isExpired = Date.now() - record.createdAt > 24 * 60 * 60 * 1000;
  if (isExpired) {
    activeAccessCodes.delete(code);
    return false;
  }
  
  return true;
};