/*
type MyFlexibleDogInfo = {
  name: string;
} & Record<string, string>;
*/
// Mapped Types
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

/** Where do i use DogInfoOptions */
const dogInfoOptions: DogInfoOptions = {
  name: null,
  age: null,
};

// Template Literals, Capitalize Utility Type, Optionals Mapped Types
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw 'Needs to be implemented';
}

const lg: DogInfo = {
  name: 'LG',
  age: 13,
};

// TODO jackpark, super cool awesome
type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
});
