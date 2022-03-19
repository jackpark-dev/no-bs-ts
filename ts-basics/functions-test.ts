import addNumbers, { addStrings, getName } from './functions';

console.log('TCL: addNumbers(1, 2)', addNumbers(1, 2));
console.log("TCL: addStrings('a', 'b')", addStrings('a', 'b'));
console.log("TCL: addStrings('a')", addStrings('a'));

console.log(getName({ first: 'Jack', last: 'Park' }));
