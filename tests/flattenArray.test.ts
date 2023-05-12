import { flattenArray } from "../src/flattenArray";

describe("flattenArray", () => {
  it("should flatten a nested array", () => {
    const input = [1, [2, [3, 4], 5], 6];
    const result = flattenArray(input);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle an empty array", () => {
    const input: number[] = [];
    const result = flattenArray(input);
    expect(result).toEqual([]);
  });

  it("should handle an array with no nested arrays", () => {
    const input = [1, 2, 3, 4, 5];
    const result = flattenArray(input);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with only nested arrays", () => {
    const input = [[1], [2], [3]];
    const result = flattenArray(input);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should handle an array with mixed elements", () => {
    const input = [1, [2, [3]], "four", [5, [6, [7]]]];
    const result = flattenArray(input);
    expect(result).toEqual([1, 2, 3, "four", 5, 6, 7]);
  });
});
