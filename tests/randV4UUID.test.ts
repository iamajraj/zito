import { randV4UUID } from "../src/randV4UUID";

describe("randV4UUID", () => {
  it("should generate a valid UUID with the correct format", () => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    const uuid = randV4UUID();

    expect(uuid).toMatch(uuidRegex);
  });

  it("should generate a unique UUID with each invocation", () => {
    const iterations = 1000;
    const uuidSet = new Set<string>();

    for (let i = 0; i < iterations; i++) {
      const uuid = randV4UUID();
      uuidSet.add(uuid);
    }

    expect(uuidSet.size).toBe(iterations);
  });
});
