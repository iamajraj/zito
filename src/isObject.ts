/**
 * Check if a value is an object.
 *
 * @param value - The value to check.
 * @returns A boolean indicating if the value is an object.
 */
export function isObject(value: any): boolean {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
