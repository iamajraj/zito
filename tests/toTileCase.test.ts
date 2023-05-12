import { toTitleCase } from "../src/toTileCase";

describe("toTitleCase", () => {
  it("should convert a string to title case", () => {
    const input = "hello world";
    const expectedOutput = "Hello World";
    const result = toTitleCase(input);
    expect(result).toBe(expectedOutput);
  });

  it("should handle an empty string", () => {
    const input = "";
    const expectedOutput = "";
    const result = toTitleCase(input);
    expect(result).toBe(expectedOutput);
  });

  it("should handle a string with special characters", () => {
    const input = "get-all";
    const expectedOutput = "Get-All";
    const result = toTitleCase(input);
    expect(result).toBe(expectedOutput);
  });
});
