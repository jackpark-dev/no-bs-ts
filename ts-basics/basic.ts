let userName: string = 'Jack';
let hasLoggedIn: boolean = true;

userName += ' Park';
console.log(userName);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(' ');
const myValues: Array<number> = [1, 2, 3];

const myPerson: {
  first: string;
  last: string;
} = {
  first: 'Jack',
  last: 'Park',
};

interface Person {
  first: string;
  last: string;
}

const myPerson1: Person = {
  first: 'Jack',
  last: 'Park',
};

const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
};
ids['30'] = 'c';

// we could know string value
if (ids['30'] === 'D') {
}

for (let i = 0; i < 10; i++) {
  // you really should let typescript infer as much as possible
  console.log(i);
}
[1, 2, 3].forEach((v) => console.log(v));
