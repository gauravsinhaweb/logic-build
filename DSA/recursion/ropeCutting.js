function cutRope(n, a, b, c) {
  if (n == 0) return 0;
  else if (n < 0) return -1;
  let cutA = cutRope(n - a, a, b, c);
  let cutB = cutRope(n - b, a, b, c);
  let cutC = cutRope(n - c, a, b, c);

  let maxPieces = Math.max(cutA, cutB, cutC);
  if (maxPieces < 0) return -1;
  return maxPieces + 1;
}

console.log(cutRope(15, 5, 8, 7)); // 3
