/*
GOAL: Ordinarily these tests would be written before the function. However, in this section you are integrity checking that the sum function returns the sum of a and b.

1. In index.test.js:
    - Check if the function sum returns the expected output
    - Should throw an error if the arguments are incorrect
    - Check if the function can handle negative numbers
    - Check if the function can handle the largest numbers
        - To use the largest number in JavaScript you can call Number.MAX_SAFE_INTEGER and this can be used for negative integers as well -Number.MAX_SAFE_INTEGER
2. Run the tests by running npm run test in the terminal or using the button.
*/
const sum = require("./index.js");

describe("sum", () => {
	it("should return the sum of two numbers", () => {
		// Write your code here
		expect(sum(5, 10)).toEqual(15);
	});

	it("should throw an error if one or both arguments are not numbers", () => {
		// Write your code here
		expect(() => { 
			sum("a", 10);
		}).toThrow("Invalid arguments");
	});

	it("should correctly handle negative numbers", () => {
		// Write your code here
		expect(sum(-5, -10)).toEqual(-15);
	});

	it("should correctly handle large numbers", () => {
		// Write your code here
		expect(typeof(sum(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))).toEqual("number");
	});
});
