interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
  printDB(): void {
    console.log(this.db);
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new PersistentMemoryDB();
myDB.set('foo', 'bar');
myDB.set('jack', 'park');
console.log(myDB.get('foo'));
myDB.printDB(); // { foo: 'bar', jack: 'park' }
// myDB.db['foo'] = 'baz';

console.log(myDB.saveToString());
