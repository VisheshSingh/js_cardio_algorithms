const arr1 = [
  { name: 'Messi', goals: 3, assists: 3, points: 6 },
  { name: 'Ronaldo', goals: 3, assists: 2, points: 5 },
  { name: 'Mbappe', goals: 2, assists: 2, points: 4 },
  { name: 'Suarez', goals: 3, assists: 0, points: 3 },
];

const arr2 = [
  { name: 'Messi', goals: 4, assists: 3, points: 7, ppg: 0, ppa: 0, pims: 0 },
  { name: 'Ronaldo', goals: 3, assists: 4, points: 7, ppg: 0, ppa: 0, pims: 0 },
  { name: 'Mbappe', goals: 3, assists: 0, points: 3, ppg: 0, ppa: 0, pims: 0 },
  { name: 'Suarez', goals: 2, assists: 1, points: 3, ppg: 0, ppa: 0, pims: 0 },
];

function addItUp(...arrayOfData) {
  const data = arrayOfData.flat();
  return data.reduce((acc, item) => {
    const { name, ...rest } = item;
    // first check if the item is new
    acc[name] = acc[name] || {};
    // loop over the rest
    Object.entries(rest).forEach(([key, val]) => {
      if (acc[name][key]) {
        acc[name][key] += val;
      } else {
        acc[name][key] = val;
      }
    });
    return acc;
  }, {});
}

console.table(addItUp(arr1, arr2));
