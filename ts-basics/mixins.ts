/** Functions creating functions */
function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLogFunction(); // you remember ()
logger('your string');

/** Functions creating classes */
function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = '';
    log(str: string) {
      console.log(str);
      this.completeLog += str + '\n';
    }

    dumpLog() {
      return this.completeLog;
    }
  };
}
const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log('Foo');
console.log(logger2.dumpLog());

/** Functions creating generic classes */
function createSimpleMemoryDatabase<T>() {
  return /*new*/ class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }

    get(id: string): T {
      return this.db[id];
    }

    getObject(): object {
      return this.db;
    }
  };
}

const StringDatabase = createSimpleMemoryDatabase<string>();
const sdb1 = new StringDatabase();
sdb1.set('a', 'hello');

/** Creating a mixin */
type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{
  getObject(): object;
}>>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDatabase = Dumpable(StringDatabase);
const sdb2 = new DumpableStringDatabase();
sdb2.set('a', 'hello');
sdb2.dump();