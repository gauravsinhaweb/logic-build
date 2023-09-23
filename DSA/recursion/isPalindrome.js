function isPalindrome(num) {
  function reverseNum(n, reversed = 0) {
    if (n <= 0) return reversed;
    return reverseNum(Math.floor(n / 10), reversed * 10 + (n % 10));
  }
  if (num == reverseNum(num)) return true;
  return false;
}
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12345)); // false
