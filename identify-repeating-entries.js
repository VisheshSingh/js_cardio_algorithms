const nums = [8, 9, 8, 6, 4, 3, 2, 1, 9, 1, 8];

function elementIndex(arr, item) {
  return arr.reduce(
    (acc, val, index) => {
      if (val === item) acc[val] = [...acc[val], index];
      return acc;
    },
    { [item]: [] }
  );
}

function findRepeatingEntries(arr) {
  const uniqueItems = new Set(arr);
  const repeatingEntries = [];

  for (let item of uniqueItems) {
    repeatingEntries.push(elementIndex(arr, item));
  }
  return repeatingEntries;
}

console.log(findRepeatingEntries(nums));

function convertToObj(arr) {
  const obj = {};
  arr.forEach((item) => {
    const keys = Object.keys(item);
    const values = Object.values(item);
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = values[i];
    }
  });
  return obj;
}

console.log(convertToObj(findRepeatingEntries(nums)));
