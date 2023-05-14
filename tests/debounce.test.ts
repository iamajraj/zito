import { debounce } from "../src/debounce";

describe("debounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should delay invoking the function until after the specified time has elapsed", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(500);
    debouncedFn();
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(1000);
    expect(mockFn).toBeCalledTimes(1);
  });
});
