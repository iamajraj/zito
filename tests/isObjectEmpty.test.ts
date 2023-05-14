import { isObjectEmpty } from "../src/isObjectEmpty";

describe("isObjectEmpty", () => {
  it("should return true for an empty object", () => {
    const emptyObject = {};

    const result = isObjectEmpty(emptyObject);

    expect(result).toBe(true);
  });

  it("should return false for a non-empty object", () => {
    const nonEmptyObject = { a: 1 };

    const result = isObjectEmpty(nonEmptyObject);

    expect(result).toBe(false);
  });
});
