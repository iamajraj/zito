import { isWhitespace } from "../src/isWhitespace";

describe("isWhitespace", () => {
  it("should return true for a string containing only whitespace characters", () => {
    const whitespaceString = "     \t \n";

    const result = isWhitespace(whitespaceString);

    expect(result).toBe(true);
  });

  it("should return false for a string containing non-whitespace characters", () => {
    const nonWhitespaceString = "Hello, world!";

    const result = isWhitespace(nonWhitespaceString);

    expect(result).toBe(false);
  });

  it("should return true for an empty string", () => {
    const emptyString = "";

    const result = isWhitespace(emptyString);

    expect(result).toBe(true);
  });
});
