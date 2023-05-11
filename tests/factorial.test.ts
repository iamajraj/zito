import { factorial } from "../src/factorial";

describe("factorial", () => {
  it("should calculate the factorial of a positive number", () => {
    // Arrange
    const number = 5;
    const expectedFactorial = 120;

    // Act
    const result = factorial(number);

    // Assert
    expect(result).toEqual(expectedFactorial);
  });

  it("should return 1 when calculating the factorial of 0", () => {
    // Arrange
    const number = 0;
    const expectedFactorial = 1;

    // Act
    const result = factorial(number);

    // Assert
    expect(result).toEqual(expectedFactorial);
  });

  it("should throw an error when calculating the factorial of a negative number", () => {
    // Arrange
    const number = -5;

    // Act and Assert
    expect(() => factorial(number)).toThrowError(
      "Factorial is not defined for negative numbers."
    );
  });
});
