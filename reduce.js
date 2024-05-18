// Decoding reduce method
const people = [
  { id: 1, name: 'John', age: 26 },
  { id: 2, name: 'Lily', age: 17 },
  { id: 3, name: 'Elie', age: 24 },
];
let result;
// Count people
result = people.reduce((acc, _) => acc + 1, 0);
console.log(result);

// sum ages
result = people.reduce((acc, person) => (acc += person.age), 0);
console.log(result);

// array of names
result = people.reduce((acc, person) => [...acc, person.name], []);
console.log(result);

// convert id => person lookup
result = people.reduce((acc, person) => ({ ...acc, [person.id]: person }), {});
console.log(result);
console.log(result[2]);

// max age
result = people.reduce((acc, person) => {
  if (acc === null || person.age > acc) return person.age;
  return acc;
}, null);
console.log(result);

// find by name
result = people.reduce((acc, person) => {
  if (person.name === 'Elie') return person;
  return acc;
}, null);
console.log(result);

// all over 18
result = people.reduce((acc, person) => {
  if (!acc) return false; // If we already found someone who is not over 18 then return false
  return person.age > 18;
}, true);
console.log(result);

// some over 18
result = people.reduce((acc, person) => {
  if (acc) return true; // If we found someone who is over 18 then return true
  return person.age < 18;
}, false);
console.log(result);

const orders = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'pending' },
  { id: 3, status: 'shipped' },
  { id: 4, status: 'delivered' },
];
// count total by status
result = orders.reduce((acc, currentOrder) => {
  console.log(acc);
  return { ...acc, [currentOrder.status]: (acc[currentOrder.status] || 0) + 1 };
}, {});
console.log(result);

// flatten an array of arrays
const files = [
  'index.js',
  ['app.js', 'router.js'],
  ['controller.js', ['model.js', 'adapter.js']],
];

function flatten(acc, item) {
  console.log(acc);
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
}

result = files.reduce(flatten, []);
console.log(result);

// write your own reduce function
function reduce(array, cb, initVal) {
  let acc = initVal;
  for (let i = 0; i < array.length; i++) {
    acc = cb(acc, array[i], i, array);
  }
  return acc;
}

result = reduce([1, 2, 3, 4], (acc, val) => (acc += val), 0);
console.log(result);
