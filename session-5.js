// Build a wall
function buildAWall(arr) {
  let wall = '*'.repeat(arr[0].length + 2);
  let starred = arr.map((item) => `*${item}*`);
  return [wall, ...starred, wall];
}

function buildAWall2(arr) {
  let maxLength = arr.reduce((acc, item) => {
    let max;
    if (item.length > acc) {
      max = item.length;
    } else {
      max = acc;
    }
    return max;
  }, 0);
  console.log(maxLength);
  let wall = new Array(maxLength + 2).fill('*').join('');
  arr = arr.map((item) => {
    if (item.length === maxLength) {
      return `*${item}*`;
    } else {
      return item.padStart(maxLength, '*') + '*';
    }
  });
  return [wall, ...arr, wall];
}

console.log(buildAWall(['abc', 'def']));
console.log(buildAWall(['abcd', 'defd']));
console.log(buildAWall2(['abcde', 'defd']));
console.log(buildAWall2(['abcd', 'defdgh']));

// add  digits
function addDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((acc, item) => acc + +item, 0);
}

console.log(addDigits(29));
console.log(addDigits(395));
console.log(addDigits(3925));

// largest adjacent product
function largestAdjacentProduct(arr) {
  let largestProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * arr[i + 1] > largestProduct) {
      largestProduct = arr[i] * arr[i + 1];
    }
  }
  return largestProduct;
}

console.log(largestAdjacentProduct([3, 6, 2, 4, 7, 6]));

// All Longest strings
function allLongestStrings(arr) {
  const sortedArr = arr.sort((a, b) => b.length - a.length);
  const longestStr = sortedArr[0];
  const filterredArr = sortedArr.filter(
    (item) => item.length === longestStr.length
  );
  return filterredArr;
}

console.log(
  allLongestStrings(['ab', 'bc', 'abc', 'a', 'bcd', 'bcde', 'abc', 'gehf'])
);

// Almost Increasing sequence
function almostIncreasingSequence(arr) {
  let result = false;
  let mistakes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (mistakes > 1) {
      return false;
    }
    if (arr[i] < arr[i + 1]) {
      continue;
    } else {
      mistakes++;
    }
    result = true;
  }
  return result;
}

console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 5, 7, 2, 4, 3]));
console.log(almostIncreasingSequence([1, 3, 5, 7, 2, 4]));
