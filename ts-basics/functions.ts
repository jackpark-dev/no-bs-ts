function addNumbers(a: number, b: number): number {
  return a + b;
}

// module.exports = addNumbers;
export default addNumbers;

// default value
export const addStrings = (str1: string, str2: string = ''): string =>
  `${str1} ${str2}`;

export const format = (title: string, param: string | number) =>
  `${title} ${param}`;

// void function
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// promise function, tsconfig.json change target to esnext
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(' ')}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}
