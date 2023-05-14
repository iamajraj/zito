import { findMax } from "../src/findMax";

describe("findMax", () => {
  it("should find the maximum value in an array of numbers", () => {
    const numbers = [5, 10, 3, 8, 1];
    const expectedMax = 10;

    const result = findMax(numbers);

    expect(result).toEqual(expectedMax);
  });

  it("should throw an error if the array is empty", () => {
    const numbers: number[] = [];

    expect(() => {
      findMax(numbers);
    }).toThrow("Array is empty.");
  });
});
