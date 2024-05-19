const people = [
  {
    fName: 'John',
    lName: 'Doe',
    score: 80,
  },
  {
    fName: 'Jane',
    lName: 'Doe',
    score: 75,
  },
  {
    fName: 'John',
    lName: 'Adams',
    score: 90,
  },
  {
    fName: 'John',
    lName: 'Adison',
    score: 85,
  },
];

function sortObjs(arr, prop1, prop2) {
  const sorted = [...arr].sort((a, z) => {
    if (a[prop1] === z[prop1]) {
      if (a[prop2] === z[prop2]) return 0;
      return a[prop2] < z[prop2] ? -1 : 1;
    } else {
      return a[prop1] < z[prop1] ? -1 : 1;
    }
  });
  return sorted;
}

console.log(sortObjs(people, 'lName', 'fName'));
console.log(sortObjs(people, 'fName', 'score'));
