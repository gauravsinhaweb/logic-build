// Naive Approach

function findHcf(a, b) {
  let min = 0;
  if (a > b) {
    min = b;
  } else {
    min = a;
  }

  for (var i = min; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return min;
    }
  }
  return -1;
}
console.log(findHcf(7, 1)); // 1

// Euclidean Algorithm for Highest Common Factor - Subtraction Approach

function findHcf(a, b) {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else if (a < b) {
      b = b - a;
    }
  }
  if (a == b) {
    return a;
  }
}
console.log(findHcf(12, 8)); // 4

// Euclidean Algorithm for Greatest Common Divisor - Modulus Approach

function findHcf(a,b){
    while(a !== 0 && b !== 0){
      if(a>b){
       a = a % b
      }else {
        b = b % a
      }
    }
    return a+b
    }
    console.log(findHcf(12,8)) // 4