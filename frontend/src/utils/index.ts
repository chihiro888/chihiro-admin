export const getPaginationCount = (count: number) => {
  return parseInt(String(count / 12)) + 1
}
