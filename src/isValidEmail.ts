/**
 * Checks if a given string is a valid email address.
 * @param {string} email - The string to check.
 * @returns {boolean} `true` if the string is a valid email address, otherwise `false`.
 */
export function isValidEmail(email: string): boolean {
  // Regular expression pattern for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}
