/**
 * Checks if a number is within a specified range.
 * @param {number} value - The number to check.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @returns {boolean} `true` if the number is within the range, otherwise `false`.
 */
export function isWithinRange(
  value: number,
  min: number,
  max: number
): boolean {
  return value >= min && value <= max;
}
