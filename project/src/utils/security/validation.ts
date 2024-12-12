export const validateHoneypot = (value: string): boolean => {
  return value === '';
};

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim();
};