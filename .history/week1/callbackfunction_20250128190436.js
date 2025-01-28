function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function sumofsquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);
  return val1 + val2;
}

function sumofcubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);
  return val1 + val2;
}

console.log(sumofsquares(3, 4));

console.log(sumofcubes(3, 4));
