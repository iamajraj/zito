import { groupBy } from "../src/groupBy";

describe("groupBy", () => {
  it("should group objects in the array based on the specified key", () => {
    // Arrange
    const arr = [
      { id: 1, category: "A" },
      { id: 2, category: "B" },
      { id: 3, category: "A" },
      { id: 4, category: "B" },
      { id: 5, category: "C" },
    ];
    const key = "category";

    // Act
    const result = groupBy(arr, key);

    // Assert
    expect(result).toEqual({
      A: [
        { id: 1, category: "A" },
        { id: 3, category: "A" },
      ],
      B: [
        { id: 2, category: "B" },
        { id: 4, category: "B" },
      ],
      C: [{ id: 5, category: "C" }],
    });
  });

  it("should handle an empty array and return an empty object", () => {
    // Arrange
    const arr: any[] = [];
    const key = "category";

    // Act
    const result = groupBy(arr, key);

    // Assert
    expect(result).toEqual({});
  });

  it("should handle objects with missing key property and skip them in the result", () => {
    // Arrange
    const arr = [
      { id: 1, category: "A" },
      { id: 2 },
      { id: 3, category: "B" },
      { id: 4, category: "A" },
      { id: 5, category: "C" },
    ];
    const key = "category";

    // Act
    const result = groupBy(arr, key);

    // Assert
    expect(result).toEqual({
      A: [
        { id: 1, category: "A" },
        { id: 4, category: "A" },
      ],
      B: [{ id: 3, category: "B" }],
      C: [{ id: 5, category: "C" }],
    });
  });
});
