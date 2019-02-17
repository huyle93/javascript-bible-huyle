/* A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.

$.each(array, function (index, value) { do sth ...})
$.each(object, function (index, value) { do sth ...})

*/

/* Ex1 */
console.log('************ Ex ************')
$.each({
    name: "John",
    lang: "JS"
}, function (key, value) {
    console.log("Name: " + key + ", Value: " + value);
});

console.log('************ Ex ************')
/* Ex2 */
$.each([0, 1, 2], function (i, n) {
    console.log("Item #" + i + ": " + n);
});

console.log('************ Ex ************')
/* Ex3 */
const myObj = {
    result: [
        {
            name: "huy",
            gender: "male"
        },
        {
            name: "selena",
            gender: "female"
        }
    ]
}

$.each(myObj.result, function (index, v) {
    console.log(index,v)
    console.log(`my name is ${v.name}, my gender is ${v.gender}`);
} )