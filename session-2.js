// longest word
function longestWord(str) {
  const cleanWords = str.toLowerCase().match(/[a-zA-Z]+/g);
  cleanWords.sort((a, b) => b.length - a.length);
  const longest = cleanWords[0];
  const filterred = cleanWords.filter((word) => word.length === longest.length);
  if (filterred.length === 1) {
    return filterred[0];
  } else {
    return filterred;
  }
}

// anagram
function isAnagram(str1, str2) {
  function cleanedUp(str) {
    return str.toLowerCase().replace(/[^\w]/gi, '').split('').sort().join('');
  }
  return cleanedUp(str1) === cleanedUp(str2);
}

// array chunking
function arrayChunking(arr, len) {
  let chunkArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkArr;
}

// flatten
function flatten(arr) {
  // SOLUTION 1
  // return [].concat(...arr)
  // SOLUTION 2
  // return [].concat.apply([], arr)
  // SOLUTION 3
  return arr.flat(Infinity);
}

// letter changes
function letterChanges(str) {
  let changed = str.toLowerCase().replace(/[a-zA-Z]/gi, function (char) {
    if (char === 'z' || char === 'Z') {
      return a;
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  changed = changed.replace(/a|e|i|o|u/g, (char) => char.toUpperCase());
  return changed;
}
console.log(longestWord('hello there, i am the heroa!'));
console.log(isAnagram('dirty room####', 'dormitory'));
console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 3));
console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 2));
console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 4));
console.log(flatten([[1, 2], [3, 4], [5, 6], [7]]));
console.log(letterChanges('Hello world'));
