// How to check for date type
const date = new Date();

// METHOD 1
console.log(date instanceof Date);
// METHOD 2
console.log(Object.prototype.toString.call(date));
console.log(
  Object.prototype.toString.call(date).replace(/\W/gi, '').endsWith('Date')
);

// Determine the earliet and latest date
const dates = [
  new Date(2018, 9, 11),
  new Date(2018, 1, 5),
  new Date(2022, 11, 25),
  new Date(2025, 11, 25),
];
console.log(Math.max.apply(null, dates));
console.log(new Date(Math.max.apply(null, dates)));
console.log(new Date(Math.min(...dates)));

// Display time format as HR:MIN:SEC:MS ---> 0000:00:00:00
function formatDate(date) {
  let hms = '';
  let formattedDate = new Date();
  formattedDate.setTime(date);
  let hr = formattedDate.getHours().toString().padStart(4, 0);
  let min = formattedDate.getMinutes().toString().padStart(2, 0);
  let sec = formattedDate.getSeconds().toString().padStart(2, 0);
  let ds = Math.floor(formattedDate.getMilliseconds() / 10)
    .toString()
    .padStart(2, 0);

  return `${hr}:${min}:${sec}:${ds}`;
}

console.log(formatDate(new Date().valueOf()));

// Find the number of days between given dates
function findNumDays(start, end) {
  const diff = end - start;
  const days = 1000 * 60 * 60 * 24;
  const result = Math.round(diff / days);
  return `The number of days - ${result}`;
}

console.log(findNumDays(new Date('July 20, 1969'), new Date()));
console.log(findNumDays(new Date('March 19, 1993'), new Date()));
console.log(findNumDays(new Date('April 11, 2024'), new Date()));
