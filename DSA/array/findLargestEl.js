// TC - O(n)

function largestEl(arr) {
  let max = 0;
  let current = 0;

  while (current < arr.length) {
    if (arr[current] < arr[current + 1]) {
      max = arr[current + 1];
    }
    current++;
  }
  return max;
}
console.log(largestEl([6, 8, 2, 3, 15, 10])); //15
console.log(largestEl([5, 9, 15, 20, 5])); //20
