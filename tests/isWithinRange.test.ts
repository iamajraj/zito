import { isWithinRange } from "../src/isWithinRange";

describe("isWithinRange", () => {
  it("should return true for a number within the range", () => {
    const value = 5;
    const min = 1;
    const max = 10;

    const result = isWithinRange(value, min, max);

    expect(result).toBe(true);
  });

  it("should return true for a number equal to the range boundaries", () => {
    const value1 = 0;
    const value2 = 10;
    const min = 0;
    const max = 10;

    const result1 = isWithinRange(value1, min, max);
    const result2 = isWithinRange(value2, min, max);

    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  it("should return false for a number outside the range", () => {
    const value = 15;
    const min = 1;
    const max = 10;

    const result = isWithinRange(value, min, max);

    expect(result).toBe(false);
  });
});
