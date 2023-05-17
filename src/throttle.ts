/**
 * Creates a throttled function that limits the execution of the provided function to a specified time interval.
 *
 * @param func - The function to throttle.
 * @param interval - The time interval in milliseconds.
 * @returns The throttled function.
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  interval: number
): T {
  let isThrottled = false;
  let lastArgs: any[] | null = null;

  function throttledFunction(this: any, ...args: any[]): ReturnType<T> | void {
    if (isThrottled) {
      lastArgs = args;
      return;
    }

    func.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (lastArgs) {
        throttledFunction.apply(this, lastArgs);
        lastArgs = null;
      }
    }, interval);
  }

  return throttledFunction as T;
}
