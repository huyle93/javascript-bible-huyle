/* Let’s clear up the confusion around the slice( ), splice( ), & split( ) methods in JavaScript */
let arrayDefinition = [];   // Array declaration in JS
let arrayMess = [1, 2, 3, "hello world", 4.12, true];
/**
 * Slice()
 * The slice( ) method copies a given part of an array and returns that copied part as a new array. It doesn’t change the original array.
 */
// let newArrayMess = arrayMess.slice(0, 3);
// console.log(newArrayMess);
/**
 * Splice()
 * The splice( ) method changes an array, by adding or removing elements from it.
 * Index is the starting point for removing elements. Elements which have a smaller index number from the given index won’t be removed
 * array.splice(index, number of elements);
 */
/* Removing Elements - For removing elements, we need to give the index parameter, and the number of elements to be removed */
// arrayMess.splice(2,1); // remove anything at index of 2, 1 time
// console.log(arrayMess);
// for (let i = 0; i < 4; i++) {
//     arrayMess.splice(1,1);
//     console.log(arrayMess);
// }
/* Adding Elements - For adding elements, we need to give them as the 3rd, 4th, 5th parameter (depends on how many to add) to the splice ( ) method 
* array.splice(index, number of elements, element, element);
*/
arrayMess.splice(0, 0, 'a', 'b'); // add a b to beginning of array
arrayMess.splice(4, 0, 'a', 'b'); // add a b to specific index location
arrayMess.splice(arrayMess.length, 0, 'a', 'b'); // add a b to end of array
console.log(arrayMess);
/**
 * Split()
 * Use to deal with string, return an array
 * Slice( ) and splice( ) methods are for arrays. The split( ) method is used for strings. It divides a string into substrings and returns them as an array. It takes 2 parameters, and both are optional.
 * string.split(separator, limit);
 * Separator: Defines how to split a string… by a comma, character etc.
Limit: Limits the number of splits with a given number
 */
let myString = arrayMess.toString();
let newArray = myString.split(",", 3);
console.log(newArray)
/* 
Summary:
Slice ( )
Copies elements from an array
Returns them as a new array
Doesn’t change the original array
Starts slicing from … until given index: array.slice (from, until)
Slice doesn’t include “until” index parameter
Can be used both for arrays and strings
Splice ( )
Used for adding/removing elements from array
Returns an array of removed elements
Changes the array
For adding elements: array.splice (index, number of elements, element)
For removing elements: array.splice (index, number of elements)
Can only be used for arrays
Split ( )
Divides a string into substrings
Returns them in an array
Takes 2 parameters, both are optional: string.split(separator, limit)
Doesn’t change the original string
Can only be used for strings
*/