/**
 * Calculates the factorial of a given number.
 *
 * @param n - The number to calculate the factorial for.
 * @returns The factorial of the given number.
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}
