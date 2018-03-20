// Load the full build.
var _ = require('lodash');


/////////////////// BEST PRACTICE Functional Programming \\\\\\\\\\\\\\\\\\\\\


// DO: Functional programming is to keep data and functions separated
// ----------------------- //
const joe = {
    name: "Joe",
    age: 30,
};

const wine = {
    age: 5,
    type: "Hennesy"
};

const me = {
    name: "Huy Le",
    age: 24
};

var increaseAge = (obj) => {
    const objCopy = _.cloneDeep(obj);
    objCopy.age += 1;
    return objCopy;
};

console.log(increaseAge(joe));
console.log(increaseAge(wine));
console.log(increaseAge(me));
// ----------------------- //
console.log("// ----------------------- //");
// ----------------------- //
// DON'T: Having stage change and Mutable data
// DO: Keep data constant, create a new data type to keep the new stage
const greeting = "Hello";
const longGreeting = greeting + " , it's nice to meet you";
const longShoutedGreeting = longGreeting.toUpperCase();

console.log(longShoutedGreeting);
// ----------------------- //
console.log("// ----------------------- //");
// ----------------------- //
// DO: Treats functions as first class for code resuability
// NOTCIE: Functional Programming is different to OOP