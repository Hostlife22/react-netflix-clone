export function fetchCount(amount = 1) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500));
}
