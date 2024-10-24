/*
1. Starting in index.test.js, create tests that verify your Lion class can do the following:
    - Test that the name and age have been set to the correct values.
    - Test that the sound() method returns the expected string.
    - Test that to the getID() returns the expected ID.
    - Test that setID(id) updates the ID to the correct value.
2. In index.js, create a Lion class that meets all the requirements outlined above.
3. Click “Test” to see if your tests have been passed!
*/
const Lion = require("./index.js");
// Write your code here
describe("Ensure that the Lion class is behaving as expected", () => {
	const testLion = new Lion("Barry", 10, 1);
	test("name is set to the correct value.", () => {
		expect(testLion.name).toEqual("Barry");
	});
	test("age is set to the correct value.", () => {
		expect(testLion.age).toEqual(10);
	});
	test("sound() returns the expected String.", () => {
		expect(testLion.sound()).toEqual("Roar!");
	});
	test("getID() returns the expected ID.", () => {
		expect(testLion.getID()).toEqual(1);
	});
	test("setID(id) updates the ID to the expected value.", () => {
		testLion.setID(5);
		expect(testLion.getID()).toEqual(5);
	});
})
