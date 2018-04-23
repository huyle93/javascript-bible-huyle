# JavaScript Test and Debug

## Testing and Debugging

Errors and bugs are a fact of life in programming ― they will always be there. A ninja programmer will try to do everything to minimize errors occurring, and find ways to identify and deal with them quickly.

## Test-driven Development (TDD) Culture

Test-driven development(TDD) is the process of writing tests before any actual code. Obviously these tests will initially fail, because there is no code to test. The next step is to write some code to make the tests pass. After this, the code is refactored to make it faster, more readable, and remove any repetition. The code is continually tested at each stage to make sure it continues to work. This process should be followed in small piecemeal chunks every time a new feature is implemented, resulting in the following workflow:

1. Write tests (that initially fail)
2. Write code to pass the tests
3. Refactor the code
4. Test refactored code

## Test and Debug Topics

1. Errors, exceptions, and warnings
2. The importance of testing and debugging
3. Strict mode
4. Debugging in the browser
5. Error objects
6. Testing and Debugging 353
7. Throwing exceptions
8. Exception handling
9. Testing frameworks

## Testing Frameworks

### Jest by Facebook

[Jest Github](https://facebook.github.io/jest/)

``` shell
npm install -g jest
```

Let's write a test function to test a squareRoot()
Create a file: squareRoot.test.js

``` javascript
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers ")
        }
        return Math.sqrt(number);
    };
test('square root of 4 is 2', () => {
    expect(squareRoot(4)).toBe(2);
});
```

Run the test
``` shell
jest -c {}
```

Result
``` shell
PASS  ./squareRoot.test.js
  ✓ square root of 4 is 2 (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.648s
Ran all test suites.
```
