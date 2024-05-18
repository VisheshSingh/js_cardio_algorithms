function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function (item, index) {
    return index + start;
  });
  return range;
}

console.log(createRange(1, 10));
console.log(createRange(5, 10));
console.log(createRange(35, 100));
