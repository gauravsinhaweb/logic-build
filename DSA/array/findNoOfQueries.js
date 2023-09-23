// no. queries
// TC - O(n)

function noQueries(arr, a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  let sum = 0;

  for (var i = min; i <= max; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(noQueries([1, 2, 3, 4, 5, 6], 0, 3)); //10
console.log(noQueries([1, 2, 4, 3, 5, 6], 4, 5)); // 11
console.log(noQueries([1, 2, 4, 3, 5, 6], 2, 5)); // 18
console.log(noQueries([1, 2, 4, 3, 5, 6], 0, 4)); // 15
