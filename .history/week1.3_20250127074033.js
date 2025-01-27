function getlength(str) {
  console.log("original string", str);
  console.log("length", str.length); // str gives us property to get length of the function
}

getlength("Hello World!");

// finding index of the function
function findindexof(str, target) {
  console.log("original string", str);
  console.log("Index", str.indexOf(target));
}
// index of the function in the returned by the
findindexof("Hello World! World", "H");

// finding last index of the function
function findlastindexof(str, target) {
  console.log("original string", str);
  console.log("Index", str.lastIndexOf(target));
}
findlastindexof("Hello World! World", "World");

// length , lastIndexOf, indexOf

function getSlice(str, start, end) {
  console.log("original string", str);
  console.log("Slice", str.slice(start, end));
}
getSlice("Hello World! World", 0, 5);

let ans = "singh".slice(0, 5);
console.log(ans);
