// Optional parameters
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  //TODO jackpark, backtick in backtick
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ''}`);
}

printIngredient('1C', 'Flour');
printIngredient('1C', 'Sugar', 'somethins more');

// Optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!; // email! -> email would not be null
  }
  return '';
}

console.log(getEmail({ id: '1', info: { email: 'jackpark.dev@gmail.com' } }));

function getEmailEasy(user: User): string {
  return user?.info?.email ?? '';
}

// Optional function calls
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  if (callback) {
    callback();
  }
  // or callback?.();
}
