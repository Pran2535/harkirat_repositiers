//loops callbacks and functions

let ans = 0;
for (let i = 1; i <= 50; i++) {
  ans = ans + i;
}
console.log(ans);

// loops callbacks and functions from

function add(a, b) {
  return a + b;
}

let sum = add(2, 3);
console.log(sum);

function findsum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = add(ans, i);
  }
  return ans;
}
console.log(findsum(100));
// call back functions
// call back functions are those which can be called in other function // are matlab ye hai ek ke ander dusra

function square(n) {
  return n * n;
}

function sumoftwosquare(a, b) {
  const val1 = square(a);
  const val2 = square(b);
  return val1 + val2;
}

console.log(sumoftwosquare(3, 4));
