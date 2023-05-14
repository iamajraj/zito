import { isValidEmail } from "../src/isValidEmail";

describe("isValidEmail", () => {
  it("should return true for a valid email address", () => {
    const validEmail = "test@example.com";

    const result = isValidEmail(validEmail);

    expect(result).toBe(true);
  });

  it("should return false for an invalid email address", () => {
    const invalidEmail = "invalid-email";

    const result = isValidEmail(invalidEmail);

    expect(result).toBe(false);
  });

  it("should return false for an empty string", () => {
    const emptyString = "";

    const result = isValidEmail(emptyString);

    expect(result).toBe(false);
  });
});
