/*
TASK: In `index.test.js`

1. Use the method `describe()` to create a test case.
2. Write the correct test case description in the `it()` or `test()`. Describe what you want! Something like “adds two numbers together and returns the result”.
3. Click “Test”
4. Edit the test to expect the correct output.
    - In the `expect()`, call the `addsTwo` function, passing in 2 numbers.
    - In the `toBe()`, write the expected result.
*/
const addsTwo = require("./index.js");

describe("Add two numbers together and returns the result", () => {
	test("Call addsTwo function with params 5, 10", () => {
		expect(addsTwo(5, 10)).toEqual(15);
	});
});