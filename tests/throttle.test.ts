import { throttle } from "../src/throttle";

describe("throttle", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should limit the execution of the function to the specified time interval", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    // Call the throttled function multiple times within the interval
    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    // Call the throttled function again
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(2);

    // Fast-forward time by another 500ms (should not trigger the function)
    jest.advanceTimersByTime(500);

    // Call the throttled function once more
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(2);

    // Fast-forward time by another 500ms (should trigger the function)
    jest.advanceTimersByTime(500);

    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});
