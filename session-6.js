// alphabet shift
function alphabetShift(str) {
  str = str.toLowerCase();
  let shifted = '';
  for (let char of str) {
    if (char === 'z') {
      shifted += 'a';
    } else {
      shifted += String.fromCharCode(char.charCodeAt() + 1);
    }
  }
  return shifted;
}

console.log(alphabetShift('crazy'));
console.log(alphabetShift('abcde'));
console.log(alphabetShift('ABCDE'));

// alphabet sub sequence
function alphabetSubSequence(str) {
  let result = true;
  const arr = str.split('');
  const charVals = [];
  for (let char of arr) {
    charVals.push(char.charCodeAt(0));
  }
  console.log(charVals);
  if (new Set(charVals).size !== charVals.length) {
    return false;
  }
  for (let i = 0; i < charVals.length; i++) {
    if (charVals[i] > charVals[i + 1]) {
      return false;
    }
  }
  return result;
}

console.log(alphabetSubSequence('ace'));
console.log(alphabetSubSequence('bxz'));
console.log(alphabetSubSequence('effg'));
console.log(alphabetSubSequence('axde'));
console.log(alphabetSubSequence('cdc'));
console.log(alphabetSubSequence('zab'));

// alternating sum
function alternatingSums(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i in arr) {
    if (+i % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return [evenSum, oddSum];
}

// alternating sum
function alternatingSums2(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i of arr) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  return [evenSum, oddSum];
}

console.log(alternatingSums([10, 20, 33, 41, 55]));
console.log(alternatingSums2([10, 20, 33, 41, 55]));

// All equally string
function allEquallyStrong(aLeft, aRight, bLeft, bRight) {
  const aStrong = Math.max(aLeft, aRight);
  const aWeak = Math.min(aLeft, aRight);
  const bStrong = Math.max(bLeft, bRight);
  const bWeak = Math.min(bLeft, bRight);

  return aStrong === bStrong && aWeak === bWeak;
}

console.log(allEquallyStrong(10, 15, 15, 10));
console.log(allEquallyStrong(15, 10, 15, 10));
console.log(allEquallyStrong(15, 10, 15, 9));
