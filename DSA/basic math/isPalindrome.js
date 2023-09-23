function isPalindrome(num) {
  let _num = num; // storing num
  let temp = 0;
  let sum = 0;
  while (num != 0) {
    temp = num % 10;
    num = Math.floor(num / 10);
    sum = sum * 10 + temp;
  }
  if (sum === _num) return true;
  return false;
}

console.log(isPalindrome(12321));
