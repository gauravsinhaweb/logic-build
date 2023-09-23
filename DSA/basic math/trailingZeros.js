function trailingZeros(num) {
  let count = 0;
  while (num != 0) {
    if (num % 10 == 0) {
      count++;
    } else break;
    num = Math.floor(num / 10);
  }
  return count;
}

console.log(trailingZeros(5000430000)); // 4
