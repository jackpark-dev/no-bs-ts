interface MyUser {
  id: string;
  name: string;
  email?: string;
  phone?: string;
}

// Partial
type MyUserOptionals = Partial<MyUser>;
/*
interface MyUserOptionals {
  id?: string;
  name?: string;
  email?: string;
}
*/

const merge = (user: MyUser, overrides: MyUserOptionals) => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    { id: 'foo', name: 'Jack', email: 'foo@foot.com' },
    {
      email: 'bar@bar.com',
    }
  )
);

// Requried
type RequiredMyUser = Required<MyUser>;

// Pick
type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

// Record, Omit
const mapById = (users: MyUser[]): Record<string, Omit<MyUser, 'id'>> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 'foo',
      name: 'Mr. foo',
    },
    { id: 'bar', name: 'Mr. bar' },
  ])
);
