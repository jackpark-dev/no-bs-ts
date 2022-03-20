/*
type MyFlexibleDogInfo = {
  name: string;
} & Record<string, string>;
*/
type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: 'LG',
  breed: 'Mutt',
  age: 22,
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionalFlags<Type> = {
  [Property in keyof Type]: null;
};

type DogInfoOptions = OptionalFlags<DogInfo>;

function listenToObject<T>(obj: T, listeners): void {
  throw 'Needs to be implemented';
}

const lg: DogInfo = {
  name: 'LG',
  age: 13,
};

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
});
