/**
 * Calculates the sum of numbers.
 *
 * @param {...number} numbers - The numbers to sum.
 * @returns {number} The sum of the numbers.
 */
export function sum(...numbers: number[]): number {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
