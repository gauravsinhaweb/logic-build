function findLcm(a, b) {
  let _a = a;
  let _b = b;
  let lcm = 0;
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else if (a < b) {
      b = b - a;
    }
  }
  if (a == b) {
    lcm = (_a * _b) / a;
    return lcm;
  }
}
console.log(findLcm(12, 8)); // 24
