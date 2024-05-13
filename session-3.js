// sum all
function sumAll(arr) {
  let args = Array.prototype.slice.call(arguments);
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}

// sum of all prime
function sumPrime(n) {
  let total = 0;
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
      return true;
    }
  }
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }
  return total;
}

// seek and destroy
function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

// arrange by height
function sortByHeight(arr) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr1.push(i);
    } else {
      arr2.push(arr[i]);
    }
  }
  arr2.sort();
  arr1.forEach((val) => arr2.splice(val, 0, -1));
  return arr2;
}

// even sum and odd sum
function sumEvenOdd(arr) {
  let even = 0;
  let odd = 0;

  for (let i of arr) {
    if (i % 2 === 0) {
      even += i;
    } else {
      odd += i;
    }
  }

  return [even, odd];
}

console.log(sumAll(2, 3, 4, 5));
console.log(sumPrime(10));
console.log(seekAndDestroy([2, 4, 3, 6, 'hello', 2, 6, 6], 2, 'hello', 6));
console.log(sortByHeight([-1, -1, 170, 150, -1, 190, -1, 120, 100, -1]));
console.log(sumEvenOdd([30, 50, 90, 13, 15, 19]));
