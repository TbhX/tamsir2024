// Rate limiting configuration
const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 3600000 // 1 hour
};

// Store for rate limiting
const requestStore = new Map<string, { count: number; timestamp: number }>();

export const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const record = requestStore.get(identifier) || { count: 0, timestamp: now };

  // Reset if outside window
  if (now - record.timestamp > RATE_LIMIT.windowMs) {
    record.count = 1;
    record.timestamp = now;
    requestStore.set(identifier, record);
    return true;
  }

  // Check if within limits
  if (record.count >= RATE_LIMIT.maxRequests) {
    return false;
  }

  // Increment count
  record.count++;
  requestStore.set(identifier, record);
  return true;
};

export const validateHoneypot = (value: string): boolean => {
  return value === '';
};

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim();
};