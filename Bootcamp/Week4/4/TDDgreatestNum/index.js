/*
A few example function calls would look like:

greatestNum(4,6); // 6
greatestNum(2,1); // 2
greatestNum(2,2); // 2
greatestNum(2,"6"); // "Please only use numbers as arguments"

    In index.test.js, create tests for the expected output including for the error message. A few expected outputs are shown above.
    In index.js, create your greatestNum function.
*/
// Write your code here
function greatestNum(arg1, arg2) {
	if (typeof(arg1) !== "number" || typeof(arg2) !== "number") {
		throw new Error("Please only use numbers as arguments");
	}

	if (arg1 >= arg2) {
		return arg1;
	} else if (arg1 < arg2) {
		return arg2;	
	}
}

// DO NOT EDIT CODE BELOW
module.exports = greatestNum;
