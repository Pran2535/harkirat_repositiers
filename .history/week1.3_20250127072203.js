function getlength(str) {
  console.log("original string", str);
  console.log("length", str.length); // str gives us property to get length of the function
}

getlength("Hello World!");

// finding index of the function
function findindexof(str, target) {
  console.log("original string", str);
  console.log("Index", str.indexof(target));
}

findindexof("Hello World!", "World");
