import { chunkArray } from "../src/chunkArray";

describe("chunkArray", () => {
  it("should break an array into chunks of specified size", () => {
    // Test case 1: Array length is a multiple of chunk size
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunkSize1 = 2;
    const expectedResult1 = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    expect(chunkArray(array1, chunkSize1)).toEqual(expectedResult1);

    // Test case 2: Array length is not a multiple of chunk size
    const array2 = ["a", "b", "c", "d", "e", "f", "g"];
    const chunkSize2 = 3;
    const expectedResult2 = [["a", "b", "c"], ["d", "e", "f"], ["g"]];
    expect(chunkArray(array2, chunkSize2)).toEqual(expectedResult2);

    // Test case 3: Empty array
    const array3: number[] = [];
    const chunkSize3 = 4;
    const expectedResult3: number[][] = [];
    expect(chunkArray(array3, chunkSize3)).toEqual(expectedResult3);
  });
});
