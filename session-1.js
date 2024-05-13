// rev a string
function revString(str) {
  // SOLUTION 1
  //   let rev = '';
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     rev = str[i] + rev;
  //   }
  //   return rev;
  // SOLUTION 2
  return str.split('').reduce((acc, item) => item + acc);
}
// rev a number
function revNum(n) {
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}

// is palindrome
function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

// capitalize letters
function capitalize(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

// max character
function maxChar(str) {
  let charMap = {};
  let maxCharacter = '';
  let maxCount = 0;

  str.split('').forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let i in charMap) {
    if (charMap[i] > maxCount) {
      maxCount = charMap[i];
      maxCharacter = i;
    }
  }

  return maxCharacter;
}

// fizz buzz
function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
// console.log(revString('hello'));
// console.log(revNum(1234));
// console.log(isPalindrome('madam'));
// console.log(capitalize('i love javascript'));
// console.log(maxChar('javascriptttt'));
fizzBuzz();
