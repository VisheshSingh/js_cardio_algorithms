function companyBots(arr) {
  const filterred = arr
    .map(([score, isCorrect]) => {
      if (isCorrect === 1) {
        return score;
      }
    })
    .filter((value) => value);
  if (!filterred.length) return 0;
  const avg = Math.round(
    filterred.reduce((acc, val) => (acc += val), 0) / filterred.length
  );
  return avg;
}

console.log(
  companyBots([
    [4, 1],
    [4, 1],
    [5, 1],
    [6, 1],
  ])
);
console.log(
  companyBots([
    [4, 1],
    [4, 0],
    [5, -1],
    [6, 1],
  ])
);
console.log(
  companyBots([
    [4, 0],
    [5, -1],
    [6, -1],
  ])
);
