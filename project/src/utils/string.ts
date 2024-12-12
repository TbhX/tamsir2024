/**
 * Replace parameters in a string with their values
 * @param text The text containing parameters in {param} format
 * @param params Object containing parameter values
 */
export function replaceParams(text: string, params: Record<string, string>): string {
  return Object.entries(params).reduce(
    (result, [key, value]) => result.replace(new RegExp(`\\{${key}\\}`, 'g'), value),
    text
  );
}

/**
 * Sanitize a string by removing HTML tags and trimming whitespace
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim();
}

/**
 * Convert a string to kebab case
 */
export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}