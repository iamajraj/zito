import { randString } from "../src/randString";

describe("randString", () => {
  it("should generate a random string of the specified length", () => {
    const length = 10;

    const result = randString(length);

    expect(result).toHaveLength(length);
    expect(typeof result).toBe("string");
  });

  it("should generate a different string each time", () => {
    const length = 8;

    const result1 = randString(length);
    const result2 = randString(length);

    expect(result1).not.toBe(result2);
  });
});
