import { flattenObject } from "../src/flattenObject";

describe("flattenObject", () => {
  it("should flatten a nested object into a one-level object", () => {
    const nestedObj = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
      hobbies: ["reading", "coding"],
    };

    const flattenedObj = flattenObject(nestedObj);

    expect(flattenedObj).toEqual({
      name: "John",
      age: 30,
      "address.street": "123 Main St",
      "address.city": "New York",
      "address.country": "USA",
      "hobbies.0": "reading",
      "hobbies.1": "coding",
    });
  });

  it("should use a custom separator between keys in the flattened object", () => {
    const nestedObj = {
      name: "John",
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
    };

    const flattenedObj = flattenObject(nestedObj, "/");

    expect(flattenedObj).toEqual({
      name: "John",
      "address/street": "123 Main St",
      "address/city": "New York",
      "address/country": "USA",
    });
  });
});
