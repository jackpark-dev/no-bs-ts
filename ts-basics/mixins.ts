function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLogFunction(); // you remember ()
logger('your string');

/** FUNCTIONS CREATING A CLASS */
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

/** FUNCTIONS CREATING A GENERIC CLASS */
function createSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
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
