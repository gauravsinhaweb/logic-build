// Checking whether a number is even or odd using the "&" operator.

function isEvenOrOdd(n) {
  return (n & 1) === 0 ? "Even" : "Odd";
}

const number = 14;
console.log(isEvenOrOdd(number));
