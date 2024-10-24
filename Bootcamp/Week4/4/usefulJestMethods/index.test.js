/*
TASK: A function called `doubleValues(arr)` has been created that:
    - Accepts an array of numbers as an argument
    - Returns an updated array with each value in the array doubled
    - Throws an error of `"Array can only contain numbers"` if the array contains a value that is not a number.

In `index.test.js`, write your tests, create tests that accomplish the following:

1. Create a test that tests that `doubleValues` returns an array of the initial values doubled.
2. Create a test that tests that `doubleValues` throws an error when the array contains a value that is not a number.
3. Click “Test” or in the console type npm run test.
*/
const doubleValues = require("./index.js");

test("Ensure that doubleValues returns an array of the initial values doubled.", () => {
	const testArray = [ 5, 7, 3 ];
	expect(doubleValues(testArray)).toEqual([ 10, 14, 6 ]);
})

test("Ensure that doubleValues throws an error when the array contains a value that is not a number.", () => {
	const testArray = [ "a", 7, 3 ];
	expect(() => { 
		doubleValues(testArray);
	}).toThrow("Array can only contain numbers");
})
