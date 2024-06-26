// flatten a deeply nested arr
function flatten1(arr) {
  return arr.reduce(
    (acc, item) =>
      Array.isArray(item) ? acc.concat(flatten1(item)) : acc.concat(item),
    []
  );
}

function flatten2(arr) {
  let stack = [...arr];
  let newArr = [];
  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      newArr.push(next);
    }
  }
  return newArr.reverse();
}

function flatten3(arr) {
  let flat = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flat.push(...flatten3(item));
    } else {
      flat.push(item);
    }
  });
  return flat;
}

console.log(flatten1([1, [2, [3, [4]], 5]]));
console.log(flatten2([1, [2, [3, [4]], 5]]));
console.log(flatten3([1, [2, [3, [4]], 5]]));
