/**
 * Finds the minimum value in an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The minimum value.
 */
export function findMin(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array is empty.");
  }

  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}
