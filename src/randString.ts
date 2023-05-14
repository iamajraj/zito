/**
 * Generates a random string of the specified length.
 *
 * @param length - The length of the random string to generate.
 * @returns The generated random string.
 */
export function randString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
