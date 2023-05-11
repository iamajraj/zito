import { deepMerge } from "../src/deepMerge";

describe("deepMerge", () => {
  it("should merge two objects deeply", () => {
    const targetObj = {
      name: "John",
      age: 25,
      hobbies: ["reading", "coding"],
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
    };

    const sourceObj = {
      age: 30,
      hobbies: ["gaming"],
      address: {
        city: "San Francisco",
        zipCode: "12345",
      },
      additionalProp: "extra",
    };

    const expectedResult = {
      name: "John",
      age: 30,
      hobbies: ["reading", "coding", "gaming"],
      address: {
        street: "123 Main St",
        city: "San Francisco",
        country: "USA",
        zipCode: "12345",
      },
      additionalProp: "extra",
    };

    const mergedObj = deepMerge(targetObj, sourceObj);
    expect(mergedObj).toEqual(expectedResult);
  });

  it("should merge arrays based on the specified strategy", () => {
    const targetObj = {
      arr: [1, 2, 3],
    };

    const sourceObj = {
      arr: [4, 5, 6],
    };

    const expectedResultConcat = {
      arr: [1, 2, 3, 4, 5, 6],
    };

    const expectedResultReplace = {
      arr: [4, 5, 6],
    };

    const mergedObjConcat = deepMerge(targetObj, sourceObj, {
      arrayStrategy: "concat",
    });
    expect(mergedObjConcat).toEqual(expectedResultConcat);

    const mergedObjReplace = deepMerge(targetObj, sourceObj, {
      arrayStrategy: "replace",
    });
    expect(mergedObjReplace).toEqual(expectedResultReplace);
  });

  it("should return the target object when source is null", () => {
    const targetObj = {
      prop: "value",
    };

    const sourceObj = null;

    const mergedObj = deepMerge(targetObj, sourceObj);
    expect(mergedObj).toEqual(targetObj);
  });

  it("should return the target object when target is not an object", () => {
    const targetObj = null;

    const sourceObj = {
      prop: "value",
    };

    const mergedObj = deepMerge(targetObj, sourceObj);
    expect(mergedObj).toEqual(targetObj);
  });
});
