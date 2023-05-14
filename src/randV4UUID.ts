/**
 * Generates a random V4 UUID (Universally Unique Identifier).
 * @returns {string} The random UUID.
 */
export function randV4UUID(): string {
  // Generate a random UUID version 4
  // Example format: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
