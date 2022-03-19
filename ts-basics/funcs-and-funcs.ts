export function printToFile(text: string, callback: () => void) {
  console.log(text);
  callback();
}

export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}
console.log(arrayMutate([1, 2, 3], (v) => v * 10));
