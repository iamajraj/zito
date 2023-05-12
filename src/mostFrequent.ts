/**
 * Finds the most frequent element in an array.
 *
 * @param {T[]} arr - The input array.
 * @returns {T | null} The most frequent element in the array, or null if the array is empty.
 * @template T
 */
export function mostFrequent<T>(arr: T[]): T | null {
  if (arr.length === 0) {
    return null;
  }

  const frequencyMap: Map<T, number> = new Map();

  let mostFrequentElement: T | null = null;
  let highestFrequency = 0;

  for (const item of arr) {
    const count = (frequencyMap.get(item) || 0) + 1;
    frequencyMap.set(item, count);
    if (count > highestFrequency) {
      highestFrequency = count;
      mostFrequentElement = item;
    }
  }

  return mostFrequentElement;
}
