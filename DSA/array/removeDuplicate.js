function removeDup(arr) {
  let current = 0;
  let newArr = [];
  while (current < arr.length) {
    if (arr[current] !== arr[current + 1]) {
      newArr.push(arr[current]);
    }
    current++;
  }
  return newArr;
}
console.log(removeDup([1, 1, 2, 3, 4, 4, 5, 5, 5])); // [1,2,3,4,5]

// without using auxiliary space

function removeDuplicate(arr) {
  let current = 0;
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[current]) {
      current++;
      arr[current] = arr[i];
    }
  }
  arr.length = current + 1;
  return arr;
}
console.log(removeDuplicate([0, 1, 1, 1, 2, 3, 4, 4, 5, 5, 5])); // [0,1,2,3,4,5]
