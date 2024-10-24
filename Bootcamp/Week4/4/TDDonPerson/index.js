/*
1. Starting in `index.test.js`, create tests that verify your `Person` class can do the following:
    - Test that the `name` and `age` have been set to the correct values.
    - Test that the `greet()` method returns the expected string.
    - Test that to the `tellAge()` method returns the expected String.
    - Test that `age` is incremented by 1 when the `birthday()` method is invoked.
2. In `index.js`, create a `Person` class that meets all the requirements outlined above.
3. Click “Test” to see if your tests have been passed!
*/
class Person {
	// Write your code here
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		return `Hello, my name is ${this.name}.`;
	}
	tellAge() {
		return `I am ${this.age} years old.`;
	}
	birthday() {
		this.age++;
	}
}
// DO NOT EDIT CODE BELOW
module.exports = Person;
