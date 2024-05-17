function bubbleSort(arr) {
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    for (j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([9, 2, 6, 4, 8, 7, 1, 2, 5, 10]));
