// #1 - Pluck
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: 'Mimi', age: 12 },
  { name: 'LG', age: 13 },
];

console.log(pluck(dogs, 'age'));
console.log(pluck(dogs, 'name'));

// #2 - Event Map
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent('addToCart', {
  productID: 'foo',
  quantity: 1,
  time: 10,
  user: 'jack',
});
sendEvent('checkout', { time: 20, user: 'bob' });
