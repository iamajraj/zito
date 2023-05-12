import { isObject } from "./isObject";

type MergeOptions = {
  arrayStrategy?: "concat" | "replace";
};

/**
 * Deep merge two objects, recursively merging their properties.
 * If the target and source objects have the same property, the source value will
 * overwrite the target value.
 * Arrays can be merged based on the specified strategy: "concat" (default)
 * concatenates the arrays,
 * and "replace" replaces the target array with the source array.
 * @param target - The target object to merge into.
 * @param source - The source object to merge from.
 * @param options - Optional merge options.
 * @returns The merged object.
 */
export function deepMerge<
  T extends Record<string, any> | null,
  U extends Record<string, any> | null
>(target: T, source: U, options: MergeOptions = {}): T {
  const { arrayStrategy = "concat" } = options;

  if (target === null || !isObject(target) || !isObject(source)) {
    return target;
  }

  const merged: T = { ...target };

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (Array.isArray(target[key]) && Array.isArray(source[key])) {
        if (arrayStrategy === "replace") {
          merged[key] = source[key] as T[Extract<keyof T, string>];
        } else {
          merged[key] = [...target[key], ...source[key]] as T[Extract<
            keyof T,
            string
          >];
        }
      } else if (isObject(target[key]) && isObject(source[key])) {
        merged[key] = deepMerge(target[key], source[key], options);
      } else {
        merged[key] = source[key];
      }
    }
  }

  return merged;
}
