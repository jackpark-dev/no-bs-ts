type Name = {
  first: string;
  last: string;
};

function addFullName(name: Name): Name & { fullName: string } {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`,
  };
}

console.log(addFullName({ first: 'Jack', last: 'Park' }));

/** Parameters and ReturnType */
function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(permuteRows(addFullName, [{ first: 'Jack', last: 'Park' }]));

class PersonWithFullName {
  constructor(public name: Name) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

/** ConstructorParameters and InstanceType */
function createObjects<T extends new (...args: any[]) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  return data.map((item) => new ObjectType(item));
}

console.log(
  createObjects(PersonWithFullName, [{ first: 'Jack', last: 'Park' }])
);

console.log(
  createObjects(PersonWithFullName, [{ first: 'Jack', last: 'Park' }]).map(
    (obj) => obj.fullName
  )
);
