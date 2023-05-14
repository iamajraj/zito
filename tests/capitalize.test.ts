import { capitalize } from "../src/capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    const input = "hello world";
    const expectedOutput = "Hello world";

    const result = capitalize(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should return an empty string if the input is empty", () => {
    const input = "";
    const expectedOutput = "";

    const result = capitalize(input);

    expect(result).toEqual(expectedOutput);
  });
});
