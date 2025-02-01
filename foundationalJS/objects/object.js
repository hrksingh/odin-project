// A constructor function in JavaScript is a special type of function
// used to create and initialize objects (instances) with shared properties and methods.
// It acts as a blueprint for creating multiple objects of the same "type."
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player = new Player("steve", "X");
console.log(player);
console.log(player.name);
console.log(player.marker);
console.log(typeof player);
console.log(typeof Player);
console.log(typeof player.name);
console.log(typeof player.marker);
console.log(Object.getPrototypeOf(player));
console.log(Object.getPrototypeOf(player) === Player.prototype);
