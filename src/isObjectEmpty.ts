/**
 * Checks if an object is empty.
 *
 * @param obj - The object to check.
 * @returns `true` if the object is empty, otherwise `false`.
 * @throws {TypeError} If `obj` is `null` or `undefined`.
 * @example
 * const emptyObject = {};
 * const nonEmptyObject = { a: 1 };
 *
 * isObjectEmpty(emptyObject); // true
 * isObjectEmpty(nonEmptyObject); // false
 */
export function isObjectEmpty(obj: object): boolean {
  if (obj == null) {
    throw new TypeError("Object cannot be null or undefined");
  }

  return Object.keys(obj).length === 0;
}
