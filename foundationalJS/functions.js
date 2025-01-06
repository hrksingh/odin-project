function favAnimal(animal) {
  return `${animal} is my favorite animal`;
}

console.log(favAnimal("Goat"));
console.log(favAnimal("Tiger"));
console.log(favAnimal("Lion"));

//default parameters
function power(num = 2) {
  return num * num;
}

console.log(power());
console.log(power(3));
console.log(power); //result - [Function: power]

// anonymous function
(function () {
  console.log("I am anonymous function");
})();

const fun = function () {
  console.log("I am anonymous function 2");
};
fun();

//Arrow functions
const greet = () => {
  console.log("Hello from arrow functions");
};
greet();

const add = (a, b) => {
  return a + b;
};
console.log(add(3, 5));

const multiply = (a, b) => a * b;
console.log(multiply(3, 5));

const square = (a) => a * a;
console.log(square(4));

(() => console.log("Hello!"))();

function add7(num) {
  return num + 7;
}

console.log(add7(1));

/**
 *
 * @param {string} word
 * @returns string
 */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).trim().toLowerCase();
}

console.log(capitalize("heLlo"));
console.log(capitalize("HeLlo"));
console.log(capitalize("hello"));

/**
 *
 * @param {string} word
 */
function lastLetter(word) {
  return word[word.length - 1];
}

console.log(lastLetter("last"));
