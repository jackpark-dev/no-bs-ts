// Function parameters
export function printToFile(text: string, callback: () => void) {
  console.log(text);
  callback();
}

// Functions params with params
export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}
console.log(arrayMutate([1, 2, 3], (v) => v * 10));

export type MutationFunction = (v: number) => number;
export function arrayMutateFuction(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutateFunc: MutationFunction = (v: number) => v * 100;
console.log(arrayMutateFuction([1, 2, 3], myNewMutateFunc));

export function createAdder(num: number) {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
