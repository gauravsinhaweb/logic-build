let set = [3, 34, 4, 12, 5, 2];
let sum = 9;
let i = 0;

function subsetSum(set, sum, i) {
  if (sum == 0) return 1;
  if (sum < 0) return 0;
  if (i == set.length) return 0;

  return subsetSum(set, sum - set[i], i + 1) + subsetSum(set, sum, i + 1);
}

console.log(subsetSum(set, sum, i)); // 2 - 5+4, 3+4+2
