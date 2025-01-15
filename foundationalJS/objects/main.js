// let user = new Object(); // "object constructor" syntax
let user = {
  //"object literal" syntax
  name: "Ash",
  age: "25",
  isAdmin: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
console.log(user);
delete user.isAdmin;
console.log(user);
console.log(user.isAdmin); //undefined error
//using in to check property exists in object
console.log("Property check using in keyword");
console.log("name" in user);
console.log("blabla" in user);
console.log("Property check using in keyword ended");

// traversal in objects
console.log("traversal in objects started");

for (let key in user) {
  console.log(key); //output: name, age
  console.log(user[key]); //output: Ash, 25
  console.log(user.key); //output: undefined, undefined , because it is literally trying to search for user.key
}

console.log("traversal in objects ended");

//multi-word property names
let user2 = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

console.log(user2);
console.log(user2["likes birds"]);

//property shorthand
let superpower = "flight";
let isGood = true;
let hero = {
  superpower,
  isGood,
  0: "test", //property can be used as number but it is converted to string internally
};
console.log(hero);
console.log(hero.superpower);
console.log(hero["0"]);

let userNoProperty = {};
console.log(userNoProperty.noSuchProperty === undefined); // true means "no such property"

console.log("are objects sorted");
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

console.log(
  "objects are sorted in special fashion, integers are sorted, other appears in creation order"
);

// objects can have object methods, functions inside object
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  // notice how it is written bio(){} not bio: function(){}
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`); //this keyword typically refers to the current object which is person here
  },
};

person.bio();
person.introduceSelf();
