// ### Brian Kernighan’s algorithm

// For any number n, performing a bitwise AND operation with n - 1 will unset the rightmost set bit.

// Check if K the bit is set

function isKthBitSet(k, i) {
  let mask = 1 << i;
  return Boolean(mask & k);
}

console.log(isKthBitSet(13, 1)); //false
console.log(isKthBitSet(13, 2)); //true
