/*

Const vs Var vs Let

Const is used for a constant value. Const is only accessible after it is defined

Var is used for a mutable value. Var can be access anywhere even before the value is defined

Let is used for inside a block. Let is only available inside a block scope

*/
// console.log(pi) ERROR, pi undefined
// const
const pi = 3.14
// pi = 1 ERROR, const can't be re-assigned
console.log(pi) // 3.14
// let
// only use inside a block scope
// only available within the block it is defined
for(let i = 0; i<3; i++) {
    console.log(i) // 0 1 2
}
// console.log(i) // ERROR

// var
console.log(i) // undefined, JS knows var i exists, but at this point it has undefined value
for(var i = 0; i<3; i++) {
    console.log(i) // 0 1 2
}
console.log(i) // 3 , got incremented one more time here