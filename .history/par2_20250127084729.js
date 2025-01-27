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
console.log(str.replace("world", "javascript"));

const Remote = "hi my name ios Pranav";
const words = Remote.split(" ");
console.log(words);

const initialarray = [1, 2, 3];
const secondarray = [4, 5, 6];
console.log(initialarray.concat(secondarray));

// const initialarray = [1, 2, 3];

function logthing(str) {
  console.log(str);
}

initialarray.forEach(logthing);

const dog = {
  name: "dog",
  age: 5,
  breed: "labrador",
  color: "black",
  legcount: 2,
  bark: function () {
    console.log("Woof woof!");
  },
};
console.log("animal" + " " + dog.name);
console.log(dog.age);

dog.bark();
