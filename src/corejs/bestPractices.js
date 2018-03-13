//
var animals = [
    { name: 'Bubu', species: 'dog' },
    { name: 'Chacha', species: 'rabbit' },
    { name: 'Hehe', species: 'turtle' },
    { name: 'Kiki', species: 'dog' }
]


// =========================== GLOBAL VARIABLES AVOIDING ============================
// storing functions and variables in object
// avoiding global variables conflicting

var ex_object = {
    now: new Date()
}

// using closure

// using var for variables
// var will rewrite the global var to use as a new one inside a local scope

// ========================== FUNCTIONAL PROGRAMMING ==============================
// less bugs
// less time
// reusable
// efficient
// smart
// functions are values

// old style function
function triple(x){
    return x * 3
}

// JS way
var newTriple = function(x){
    return x * 3
}

// assign function to a variable
var waffle = triple
console.log(waffle(30))

// higher order function
// take one func and put into another func
// goal: trying to get all dogs
// Old style normal for loop

// filter


// main
console.log(`the time is ${ex_object.now}`);