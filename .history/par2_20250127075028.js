function cutIt(str, start, end) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= start && i < end) {
      newStr += str[i];
    }
  }
}

const value = "harkirat singh";
let ans2 = value.slice(2, 5);
console.log(ans2);
console.log(cutIt(value, 2, 5));
