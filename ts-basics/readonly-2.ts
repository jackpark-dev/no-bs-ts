class Doggy {
  constructor(public readonly name: string, public age: number) {}
}

const lgg = new Doggy('LG', 13);
// lgg.name = 'Foo';
console.log(lgg.name);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }
}

DogList.addDog(lgg);
