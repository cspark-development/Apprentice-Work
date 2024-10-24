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
// Write your code here
function sumOfOneToN(num) {
	if (num < 1) {
		throw new Error("Please only use numbers larger than 1");
	} else if (num === 1) {
		return num;
	}
	return sumOfOneToN(num - 1) + num;
}

// DO NOT EDIT CODE BELOW
module.exports = sumOfOneToN;
