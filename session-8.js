const original = {
  name: 'Alice',
  age: 25,
  skills: ['JavaScript', 'TypeScript'],
  address: { city: 'Wonderland', zip: '12345' },
};

const clone = structuredClone(original);
console.log(clone);

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arr = [];
    for (let item of obj) {
      arr.push(deepClone(item));
    }
    return arr;
  }

  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(newObj);
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

console.log(deepClone(original));
