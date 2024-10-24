/*
1. Starting in `index.test.js`, create tests that verify your `Person` class can do the following:
    - Test that the `name` and `age` have been set to the correct values.
    - Test that the `greet()` method returns the expected string.
    - Test that to the `tellAge()` method returns the expected String.
    - Test that `age` is incremented by 1 when the `birthday()` method is invoked.
2. In `index.js`, create a `Person` class that meets all the requirements outlined above.
3. Click “Test” to see if your tests have been passed!
*/
const Person = require("./index.js");
// DO NOT EDIT CODE ABOVE

// Your code here
describe("Ensure that the Person class is behaving as expected", () => {
	const testPerson = new Person("John", 20);

	test("name is set to the correct value", () => {
		expect(testPerson.name).toEqual("John");	
	});
	test("age is set to the correct value", () => {
		expect(testPerson.age).toEqual(20);
	});
	test("greet() returns expected String", () => {
		expect(testPerson.greet()).toEqual("Hello, my name is John.");
	});
	test("tellAge() returns expected String", () => {
		expect(testPerson.tellAge()).toEqual("I am 20 years old.");
	});
	test("birthday() increments age by 1", () => {
		const originalAge = testPerson.age;
		testPerson.birthday();
		expect(testPerson.age).toEqual(originalAge + 1);
	});
});
