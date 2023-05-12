/**
 * Checks if a string is a palindrome.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} Returns true if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str: string): boolean {
  const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = sanitizedStr.split("").reverse().join("");
  return sanitizedStr === reversedStr;
}
