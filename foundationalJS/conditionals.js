let a = 10;
let b = 12;

let c = 15;
let d = 15;

console.log(a <= b);
console.log(c === d);
console.log(c !== d);

console.log("Z" == "Z");
console.log(`A` == "A");

console.log("2" === 2);
console.log("01" === 1);

console.log(Boolean(0));
console.log(Boolean("0"));

console.log(null == undefined);
console.log(null === undefined);

console.log(null == 0);
console.log(null == "0");
console.log(null == false);
console.log(null == "");
console.log(null === 0);
console.log(null === "0");
console.log(null === false);
console.log(null === "");

console.log(null <= 0);
console.log(null >= 0);

alert(undefined || 0 || null);
alert(!!1); // converts to boolean
