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
findindexof("Hello World!", "wrld!");
