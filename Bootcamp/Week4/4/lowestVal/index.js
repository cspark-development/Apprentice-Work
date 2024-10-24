/*
A few example function calls would look like:

lowestVal([1, 2, 3, 4]); // 1
lowestVal([4, 3, 2]); // 2
lowestVal([4, 4, 4, 4, 4]); // 4
lowestVal(["1", 2, 3, 4, 5]); // "Please check that your array only has numbers"

 

    In index.test.js, create tests for the expected output including for the error message. A few expected outputs are shown above.
    In index.js, create your lowestVal function.
    Click “Test” or type npm run test in the terminal to see if your tests have passed!
*/
// Write your code here
function lowestVal(array) {

	const newArray = array.slice();
	const lastElement = newArray[newArray.length - 1];
	const nextToLastElement = newArray[newArray.length - 2];
	if (typeof(lastElement) !== "number") {
		throw new Error("Please check that your array only has numbers");
	} else if (newArray.length === 1) {
		return lastElement;
	}

	if (lastElement < nextToLastElement) {
		newArray[newArray.length - 2] = lastElement;
		return lowestVal(newArray.slice(0,-1));
	} else {
		return lowestVal(newArray.slice(0,-1));
	}

}

// DO NOT EDIT CODE BELOW
module.exports = lowestVal;
