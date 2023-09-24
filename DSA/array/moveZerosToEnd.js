function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
      nonZeroIndex++;
    }
  }
  return arr;
}
console.log(moveZerosToEnd([1, 2, 3, 0, 0, 6, 8, 9])); // 12368900
