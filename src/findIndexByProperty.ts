/**
 * Finds the index of the first occurrence of an object in an array of objects based on the value of a specified property.
 *
 * @template T The type of the objects in the array.
 * @param {T[]} array - The array of objects to search.
 * @param {keyof T} property - The property to compare against the specified value.
 * @param {T[keyof T]} value - The value to search for in the array.
 * @returns {number} The index of the first occurrence of the object with the specified property value, or -1 if not found.
 */
export function findIndexByProperty<T>(
  array: T[],
  property: keyof T,
  value: T[keyof T]
): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i][property] === value) {
      return i;
    }
  }
  return -1;
}
