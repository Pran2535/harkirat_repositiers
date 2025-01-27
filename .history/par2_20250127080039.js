function cutIt(str, start, end) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= start && i < end) {
      newStr += str[i];
    }
  }
  return newStr; // Add return statement
}

const value = "harkirat singh";
let ans2 = value.slice(2, 5);
console.log(ans2); // Logs the sliced portion using slice()
console.log(cutIt(value, 2, 5)); // Logs the sliced portion using the cutIt function

const str = "hello world";
console.log(str.replace(str, "world", "javascript"));
