/**
 * Checks if a string contains only whitespace characters.
 * @param {string} str - The string to check.
 * @returns {boolean} `true` if the string contains only whitespace characters, otherwise `false`.
 */
export function isWhitespace(str: string): boolean {
  return str.trim().length === 0;
}
