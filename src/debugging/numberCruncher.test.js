'use strict';
// Version Three with Error Handling
function factorsOf(n) {
    if (Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}
// Version Two
/* function factorsOf(n) {
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
} */

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

// Handling argument error
it('should throw an exception for non-numerical data', () => {
    expect(() => factorsOf('twelve')).toThrow();
});
it('should throw an exception for negative numbers', () => {
    expect(() => factorsOf(-2)).toThrow();
});
it('should throw an exception for non-integer numbers', () => {
    expect(() => factorsOf(3.14159)).toThrow();
});

// Test factorsOf()
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
// Prime is number that divisible by exactly 2 natural numbers
function isPrime(n) {
    try {
        return factorsOf(n).length === 2;
    } catch (error) {
        return false;
    }
}

// Handling argument errror
test('non-numerical data returns not prime', () => {
    expect(isPrime('two')).toBe(false);
});
test('non-integer numbers return not prime', () => {
    expect(isPrime(1.2)).toBe(false);
});
test('negative numbers return not prime', () => {
    expect(isPrime(-1)).toBe(false);
});

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

/* tests and code needed to pass them for a function that calculates the factorial of its positive integer argument less than or equal to 21 
Valid: value from 0 to 21
Invalid: less than 0 and greater than 21
*/

function factorsOfGiven(n) {
    if (Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if (n > 21) {
        throw new RangeError('Argument Error: Number must be less than or equal to 21');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}

// Handling argument error
it('should throw an exception for non-numerical data', () => {
    expect(() => factorsOfGiven('twelve')).toThrow();
});
it('should throw an exception for negative numbers', () => {
    expect(() => factorsOfGiven(-2)).toThrow();
});
it('should throw an exception for number greater than 21', () => {
    expect(() => factorsOfGiven(22)).toThrow();
});
it('should throw an exception for non-integer numbers', () => {
    expect(() => factorfactorsOfGivensOf(3.14159)).toThrow();
});

// Test factorsOf()
test('factors of 21', () => {
    expect(factorsOfGiven(21)).toEqual([1, 3, 7, 21]);
});