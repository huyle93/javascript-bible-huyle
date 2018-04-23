'use strict';
// Version Two
function factorsOf(n) {
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}

// Version One
/* function factorsOf(n) {
    const factors = [];
    for (let i = 1; i <= n; i++) {
        if (n / i === Math.floor(n / i)) {
            factors.push(i);
        }
    }
    return factors;
} */

test('factors of 12', () => {
    expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]);
});

/* 

This function creates a local variable called factors and initializes it as an empty
array. It then loops through every integer value from 1 up to n (the number that
was given as an argument) and adds it to the array of factors using the push()
method, if it’s a factor. We test if it’s a factor by seeing if the answer leaves a
whole number with no remainder when n is divided by the integer 1 (the
definition of a factor).

*/

/* ================== TEST CASE 2 ================== */

function isPrime(n) {
    return factorsOf(n).length === 2;
}

// Using toBe() matcher to check if the result is true

/* test: whether true is returned when a prime number (2) is provided as an argument */
test('2 is prime', () => {
    expect(isPrime(2)).toBe(true);
});
/* test: check that true is not returned if a nonprime
number (10) is given as an argument */
test('10 is not prime', () => {
    expect(isPrime(10)).not.toBe(true);
});