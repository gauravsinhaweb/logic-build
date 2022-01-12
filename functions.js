// EASY
// 1

const power = (a, b) => {
  return Math.pow(a, b);
};
const output = power(2, 3);
console.log(output);

// 2

const areaOfHexagon = (a) => {
  return (3 * Math.sqrt(3) * (a * a)) / 2;
};

const output = areaOfHexagon(10);
console.log(output);

// 3

const noOfWords = (w) => {
  return w.split(" ").length;
};

const output = noOfWords("We are neoGrammers");

console.log(output);

// 4

const findMin = (a, b, ...rest) => {
  return Math.min(a, b);
};

const output = findMin(3, 5, 9, 1);
console.log(output);

// 5

const typeOfTriangle = (a, b, c) => {
  if (a == 60 && b == 60 && c == 60) {
    console.log("equilateral triangle");
  } else if (a == b || b == c || c == b) {
    console.log("isoceles triangle");
  } else {
    console.log("scalane triangle");
  }
};

typeOfTriangle(60, 60, 60);

// MEDIUM

// 1

const arrayLength = (arr) => {
  return arr.length;
};

const output = arrayLength([1, 5, 3, 7, 8]);
console.log(output);

// 2

const indexOf = (...items) => {
  return items.length;
};

const output = indexOf([1, 6, 3, 5, 8, 9], 3);
console.log(output);

// 3

const replace = (arr, a, b, ...rest) => {
  arr.forEach((elem, ind) => {
    if (elem == a) {
      arr[ind] = b;
    }
  });
  return arr;
};

const output = replace([1, 5, 3, 5, 6, 8], 5, 10);
console.log(output);

// OR

const replace = (arr, a, b, ...rest) => {
  for (let i in arr) {
    if (a == arr[i]) {
      arr[i] = b;
    }
  }
  return arr;
};

const output = replace([1, 5, 3, 5, 6, 8], 5, 10);
console.log(output);

// 4

const mergeArray = (arr1, arr2) => {
  return arr1.concat(arr2);
};

const output = mergeArray([1, 3, 5], [2, 4, 6]);
console.log(output);

// 5

const charAt = (text, num) => {
  return text.charAt(num);
};

const output = charAt("neoGcamp", 4);
console.log(output);

// ADVANCE

// 1

const encodeString = (str, num) => {
  str = str.toLowerCase();

  var result = "";
  var charcode = 0;

  for (var i = 0; i < str.length; i++) {
    charcode = str[i].charCodeAt() + num;
    result += String.fromCharCode(charcode);
  }

  return result;
};

const output = encodeString("neogcamp", 2);
console.log(output);

// OR

const alp = "abcdefghijklmnopqrstuvwxyz";

const encodeString = (str, shift) =>
  str
    .split("")
    .map((e) => alp[(alp.indexOf(e) + shift) % 26])
    .join("");

const output = encodeString("neogcamp", 2);
console.log(output);

// 2

const toSentenceCase = (str) => {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  str = words.join(" ");
  return str;
};
const output = toSentenceCase("we are neoGrammers");
console.log(output);

// 3

const sortArray = (arr) => {
  return arr.sort(function (a, b) {
    return a - b;
  });
};
const output = sortArray([100, 83, 32, 9, 45, 61]);
console.log(output);

// 4

const toSentenceCase = (str) => {
  return Array.from(str).reverse().join("").split(" ").reverse().join(" ");
};

const output = toSentenceCase("we are neoGrammers");
console.log(output);
