/**
 * Converts a string to title case.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The converted string in title case.
 */
export function toTitleCase(str: string): string {
  return str.replace(
    /\b\w/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}
