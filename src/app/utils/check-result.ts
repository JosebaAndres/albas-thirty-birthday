export function checkResult(value: string, result: string): boolean {
  if (value && result) {
    return value.toLowerCase() === result.toLowerCase();
  } else {
    return false;
  }
}
