import { findMin } from "../src/findMin";

describe("findMin", () => {
  it("should find the minimum value in an array of numbers", () => {
    const numbers = [5, 10, 3, 8, 1];
    const expectedMin = 1;

    const result = findMin(numbers);

    expect(result).toEqual(expectedMin);
  });

  it("should throw an error if the array is empty", () => {
    const numbers: number[] = [];

    expect(() => {
      findMin(numbers);
    }).toThrow("Array is empty.");
  });
});
