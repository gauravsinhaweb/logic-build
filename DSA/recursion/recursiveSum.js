function recursiveSum(num) {
  if (num <= 0) {
    return 0;
  }
  return num + recursiveSum(num - 1);
}
console.log(recursiveSum(4)); // 10

function recursiveSum(num) {
  if (num <= 0) {
    return 0;
  } else {
    return (num % 10) + recursiveSum(Math.floor(num / 10));
  }
}
console.log(recursiveSum(1234)); // 10
