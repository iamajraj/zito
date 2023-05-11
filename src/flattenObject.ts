/**
 * A utility function that flattens a nested object into a one-level object,
 * with keys representing the path to the original value in the nested object.
 *
 * @param obj The nested object to flatten.
 * @param separator The separator to use between keys in the flattened object.
 * @returns The flattened object.
 */
export function flattenObject(
  obj: Record<string, any>,
  separator = "."
): Record<string, any> {
  const result: Record<string, any> = {};

  function recurse(current: Record<string, any>, path: string[] = []) {
    for (const key in current) {
      const value = current[key];
      const newPath = path.concat(key);
      if (typeof value === "object") {
        recurse(value, newPath);
      } else {
        const keyString = newPath.join(separator);
        result[keyString] = value;
      }
    }
  }

  recurse(obj);
  return result;
}
