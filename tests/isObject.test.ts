import { isObject } from "../src/isObject";

describe("isObject", () => {
  it("should return false for any type that is other than object", () => {
    let notObj = "Hello World";
    let isObj = isObject(notObj);
    expect(isObj).toBeFalsy();
  });
  it("should return true for object", () => {
    let obj = {
      a: "b",
    };
    let isObj = isObject(obj);
    expect(isObj).toBeTruthy();
  });
});
