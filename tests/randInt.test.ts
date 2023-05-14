import { randInt } from "../src/randInt";

describe("randInt", () => {
  it("should generate a random integer within the specified range", () => {
    const min = 1;
    const max = 10;

    const result = randInt(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
    expect(Number.isInteger(result)).toBe(true);
  });

  it("should return the same value when min and max are equal", () => {
    const value = 5;

    const result = randInt(value, value);

    expect(result).toBe(value);
  });
});
