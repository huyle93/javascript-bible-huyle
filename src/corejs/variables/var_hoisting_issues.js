/*

Var in JavaScript only respect the function block scope
Var does not respect any other scope such as if scope
Lexical scope means things outside is available inside the inside scope
Hoisting means whenever you define a varible within a function, that variable value is available within the function scope. But, before the variable, the value is undefined.

=> always define variable at the beginning of the function when using var

*/
// console.log(x) Undefined value, hoisting
var x = function() {
    // var y = 1; // y is accessible through out this scope
    // console.log(y); // 1
    if(true) {
        var y = 1;
    }
    if(true) {
        var y = 1; // CANNOT have another var y here
    }
    console.log(y); // 1

    var z = function() {
        console.log(y)
    }
    z(); // 1 , lexical scope, function z access var y value from outside scope
}
// console.log(y); ERROR y is not defined
x();


// var a = 0
// var b = function () {
//     console.log(a) UNDEFINED
//     var a = 2
// }
// b()