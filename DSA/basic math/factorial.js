function factorial(num) {
  let mul = 1;
  for (var i = num; i > 0; i--) {
    mul = mul * i;
  }
  return mul;
}

console.log(factorial(6)); // 720
