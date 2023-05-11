import { deepClone } from "../src/deepClone";

describe("deepClone", () => {
  it("should clone an object", () => {
    const originalObj = {
      name: "John",
      age: 25,
      hobbies: ["reading", "coding"],
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
    };

    const clonedObj = deepClone(originalObj);
    expect(clonedObj).toEqual(originalObj);
    expect(clonedObj).not.toBe(originalObj); // Verify it's a deep clone
  });

  it("should clone an array", () => {
    const originalArr = [1, 2, [3, 4]];
    const clonedArr = deepClone(originalArr);
    expect(clonedArr).toEqual(originalArr);
    expect(clonedArr).not.toBe(originalArr); // Verify it's a deep clone
  });

  it("should return primitive values as is", () => {
    const originalValue = "Hello";
    const clonedValue = deepClone(originalValue);
    expect(clonedValue).toBe(originalValue);
  });

  it("should return null as is", () => {
    const originalValue = null;
    const clonedValue = deepClone(originalValue);
    expect(clonedValue).toBe(originalValue);
  });
});
