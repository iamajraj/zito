/**
 * Flattens an array of nested arrays into a single-dimensional array.
 *
 * @param {T[]} arr - The input array.
 * @returns {T[]} A new array with all the elements from the input array and its nested arrays.
 * @template T
 */
export function flattenArray<T>(arr: T[]): T[] {
  const result: T[] = [];

  function recursiveFlatten(arr: T[]) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        recursiveFlatten(item);
      } else {
        result.push(item);
      }
    }
  }

  recursiveFlatten(arr);

  return result;
}
