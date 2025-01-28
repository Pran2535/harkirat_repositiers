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

function multiply(a, b, callback) {
  let result = a * b;
  callback(result);
}
function callback(result) {
  console.log(result);
}
multiply(1, 2, callback);
