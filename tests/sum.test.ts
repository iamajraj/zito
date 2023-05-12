import { sum } from "../src/sum";

describe("sum", () => {
  it("should return the sum of all numbers", () => {
    expect(sum(28, 32, 9)).toBe(69);
    expect(sum(-1, 5, 10)).toBe(14);
  });
});
