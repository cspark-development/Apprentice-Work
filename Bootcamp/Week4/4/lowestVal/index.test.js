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
const lowestVal = require("./index.js");
// DO NOT EDIT CODE ABOVE

// Write your code here
describe("Ensure lowestVal() function is behaving properly", () => {
	test("lowestVal([1, 2, 3, 4]) should return 1.", () => {
		expect(lowestVal([1, 2, 3, 4])).toEqual(1);
	});
	test("lowestVal([4, 3, 2]) should return 2.", () => {
		expect(lowestVal([4, 3, 2])).toEqual(2);
	});
	test("lowestVal([4, 4, 4, 4]) should return 4.", () => {
		expect(lowestVal([4, 4, 4, 4])).toEqual(4);
	});
	test("lowestVal([\"1\", 2, 3, 4, 5]) should throw an error.", () => {
		expect(() => {
			lowestVal(["1", 2, 3, 4, 5])
		}).toThrow("Please check that your array only has numbers");
	});
})
