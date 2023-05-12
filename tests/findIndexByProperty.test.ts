import { findIndexByProperty } from "../src/findIndexByProperty";

// Define a sample array of objects
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alice" },
];

describe("findIndexByProperty", () => {
  it("should return the index of the first occurrence of an object with the specified property value", () => {
    const index = findIndexByProperty(users, "name", "Jane");
    expect(index).toBe(1);
  });

  it("should return -1 if the value is not found", () => {
    const index = findIndexByProperty(users, "name", "Bob");
    expect(index).toBe(-1);
  });
});
