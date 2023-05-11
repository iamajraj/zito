/**
 * Takes an array of objects and a key, and returns a new object where
 * the keys are unique values of the specified key in the objects, and the
 * values are arrays of objects that have that key value.
 *
 * @template T - The type of objects in the input array.
 * @param {T[]} arr - The input array of objects.
 * @param {keyof T} key - The key to group the objects by.
 * @returns {{ [key: string]: T[] }} - The resulting object.
 *
 * @example
 * // Returns { 'foo': [{ foo: 'foo', bar: 1 }, { foo: 'foo', bar: 2 }], 'bar': [{ foo: 'bar', bar: 3 }] }
 * groupBy([{ foo: 'foo', bar: 1 }, { foo: 'bar', bar: 3 }, { foo: 'foo', bar: 2 }], 'foo');
 */
export function groupBy<T>(arr: T[], key: keyof T): { [key: string]: T[] } {
  return arr.reduce((acc, obj) => {
    const val = obj[key] as unknown as string;
    acc[val] = acc[val] || [];
    acc[val].push(obj);
    return acc;
  }, {} as { [key: string]: T[] });
}
