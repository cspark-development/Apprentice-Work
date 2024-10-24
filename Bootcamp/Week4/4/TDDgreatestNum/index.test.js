/*
A few example function calls would look like:

greatestNum(4,6); // 6
greatestNum(2,1); // 2
greatestNum(2,2); // 2
greatestNum(2,"6"); // "Please only use numbers as arguments"

    In index.test.js, create tests for the expected output including for the error message. A few expected outputs are shown above.
    In index.js, create your greatestNum function.
*/

const greatestNum = require("./index.js");
// Write your code here
describe("Ensure greatestNum() function is behaving properly", () => {
	test("greatestNum(4,6) should return 6", () => {
		expect(greatestNum(4,6)).toEqual(6);
	});
	test("greatestNum(2,1) should return 2", () => {
		expect(greatestNum(2,1)).toEqual(2);
	});
	test("greatestNum(2,2) should return 2", () => {
		expect(greatestNum(2,2)).toEqual(2);
	});
	test("greatestNum(2,\"6\") should throw an error", () => {
		expect(() => {
			greatestNum(2,"6")
		}).toThrow("Please only use numbers as arguments");
	});
})
