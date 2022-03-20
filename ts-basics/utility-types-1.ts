interface MyUser {
  id: number;
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
    { id: 1, name: 'Jack', email: 'foo@foot.com' },
    {
      email: 'bar@bar.com',
    }
  )
);

// Requried
type RequiredMyUser = Required<MyUser>;

// Pick
type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

type UserWithoutID = Omit<MyUser, 'id'>;

// Record, Omit
const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> => {
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
      id: 1,
      name: 'Mr. foo',
    },
    { id: 2, name: 'Mr. bar' },
  ])
);
