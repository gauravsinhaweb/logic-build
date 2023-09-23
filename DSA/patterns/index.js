// pattern 1

let n = 5;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += " " + "*";
  }
  string += "\n";
}
console.log(string);

// pattern 2

let n = 5;

let string = "";

for (let i = 0; i < n; i++) {
  for (let j = i; j >= 0; j--) {
    string += " " + "*";
  }
  string += "\n";
}
console.log(string);

// pattern 3

let n = 5;

let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);

// pattern 4

let n = 5;

let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += "\n";
}
console.log(string);

// pattern 5

let n = 5;

let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// pattern 6

let n = 5;

let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);

// pyramidal pattern

const n = 5;
let string = "";

function makePattern(n) {
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n - i; j++) {
      string += " ";
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
      string += "*";
    }
    for (var l = 1; l <= n - i; l++) {
      string += " ";
    }
    string += "\n";
  }

  return string;
}

console.log(makePattern(n));

// inverted pyramidal pattern

const n = 5;
let string = "";

function makePattern(n) {
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i - 1; j++) {
      string += " ";
    }
    for (var k = 1; k <= 2 * n - 2 * i + 1; k++) {
      string += "*";
    }
    for (var l = 1; l <= i - 1; l++) {
      string += " ";
    }

    string += "\n";
  }
  return string;
}

console.log(makePattern(n));
