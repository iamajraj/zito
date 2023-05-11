/**
 * Breaks an array into multiple smaller arrays of a specified size.
 * @param arr The input array to be chunked.
 * @param size The size of each chunk.
 * @returns An array of chunks.
 */
export function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  let index = 0;

  while (index < arr.length) {
    chunks.push(arr.slice(index, index + size));
    index += size;
  }

  return chunks;
}
