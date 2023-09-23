// Counting the number of set bits using the general thing log n solution

function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    n &= n - 1;
    count++;
  }
  return count;
}

const number = 25;
console.log(countSetBits(number));
