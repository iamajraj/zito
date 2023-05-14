/**
 * Finds the maximum value in an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The maximum value.
 */
export function findMax(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array is empty.");
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
