import { mostFrequent } from "../src/mostFrequent";

describe("mostFrequent", () => {
  it("should return the most frequent element", () => {
    const input = [1, 2, 3, 2, 2, 4, 4, 5, 5, 5, 5];
    const result = mostFrequent(input);
    expect(result).toBe(5);
  });

  it("should handle an empty array", () => {
    const input: number[] = [];
    const result = mostFrequent(input);
    expect(result).toBeNull();
  });

  it("should handle an array with a single element", () => {
    const input = [42];
    const result = mostFrequent(input);
    expect(result).toBe(42);
  });

  it("should handle multiple elements with the same frequency", () => {
    const input = [1, 2, 3, 2, 3];
    const result = mostFrequent(input);
    expect(result).toBe(2);
  });
});
