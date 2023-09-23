// TC - O(n)

function revArr(arr) {
  let rev = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}

console.log(revArr([6, 8, 2, 3, 15, 10])); // [10,15,3,2,8,6]
