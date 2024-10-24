/*
GOAL: We want to create a function called sumOfOneToN that accepts an argument of num and sums all values from 1 up this number. If the user inputs a value less than 1, then an error of Please only use numbers larger than 1 should be thrown.
 
Action Item: Coding Challenge

Directions: 

A few example function calls would look like:

sumOfOneToN(2); // 3
sumOfOneToN(10); // 55
sumOfOneToN(20); // 210
sumOfOneToN(39); // 780
sumOfOneToN(0); // Please only use numbers larger than 1 

    In index.test.js, create tests for the expected output including for the error message. A few expected outputs are shown above.
    In index.js, create your sumOfOneToN function.
    Click “Test” to see if your tests have passed!
*/
const sumOfOneToN = require("./index.js");
// DO NOT EDIT CODE ABOVE
describe("Ensure sumOfOneToN() function behaves properly", () => {
	test("sumOfOneToN(2) should return 3", () => {
		expect(sumOfOneToN(2)).toEqual(3);
	});
	test("sumOfOneToN(10) should return 55", () => {
		expect(sumOfOneToN(10)).toEqual(55);
	});
	test("sumOfOneToN(20) should return 210", () => {
		expect(sumOfOneToN(20)).toEqual(210);
	});
	test("sumOfOneToN(39) should return 780", () => {
		expect(sumOfOneToN(39)).toEqual(780);
	});
	test("sumOfOneToN(0) should throw an error", () => {
		expect(() => {
			sumOfOneToN(0)
		}).toThrow("Please only use numbers larger than 1");
	});
});

// Write your code here

