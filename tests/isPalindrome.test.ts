import { isPalindrome } from "../src/isPalindrome";

describe("isPalindrome", () => {
  it("should return true for a palindrome string", () => {
    const input = "level";
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    const input = "hello";
    const result = isPalindrome(input);
    expect(result).toBe(false);
  });

  it("should ignore non-alphanumeric characters and letter casing", () => {
    const input = "A man, a plan, a canal: Panama";
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
});
